function parseCookies(header) {
    const list = {};
    if (!header) return list;
    header.split(';').forEach(cookie => {
        const parts = cookie.split('=');
        const key = parts.shift().trim();
        const value = decodeURIComponent(parts.join('='));
        list[key] = value;
    });
    return list;
}

function setCookie(res, name, value, options = {}) {
    const parts = [`${name}=${value}`];
    if (options.httpOnly) parts.push('HttpOnly');
    if (options.secure) parts.push('Secure');
    if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
    if (options.path) parts.push(`Path=${options.path}`);
    if (typeof options.maxAge === 'number') parts.push(`Max-Age=${options.maxAge}`);
    res.setHeader('Set-Cookie', parts.join('; '));
}

module.exports = async function handler(req, res) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
        res.status(500).send('OAuth 설정이 누락되었습니다.');
        return;
    }

    const { code, state } = req.query || {};
    if (!code || !state) {
        res.status(400).send('OAuth 인증 코드가 없습니다.');
        return;
    }

    const cookies = parseCookies(req.headers.cookie);
    if (!cookies.ga4_oauth_state || cookies.ga4_oauth_state !== state) {
        res.status(400).send('OAuth state 검증에 실패했습니다.');
        return;
    }

    try {
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: String(code),
                grant_type: 'authorization_code',
                redirect_uri: redirectUri
            }).toString()
        });

        const tokenData = await tokenRes.json();
        if (!tokenRes.ok) {
            res.status(400).send(tokenData.error_description || '토큰 발급 실패');
            return;
        }

        const maxAge = tokenData.expires_in ? Number(tokenData.expires_in) : 3600;

        setCookie(res, 'ga4_access_token', tokenData.access_token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Lax',
            path: '/',
            maxAge
        });

        setCookie(res, 'ga4_oauth_state', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'Lax',
            path: '/',
            maxAge: 0
        });

        const returnTo = cookies.ga4_oauth_return ? decodeURIComponent(cookies.ga4_oauth_return) : '/?page=ga4-experience&category=quick-menu';
        setCookie(res, 'ga4_oauth_return', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'Lax',
            path: '/',
            maxAge: 0
        });

        res.writeHead(302, { Location: returnTo });
        res.end();
    } catch (error) {
        res.status(500).send('OAuth 처리 중 오류가 발생했습니다.');
    }
}
