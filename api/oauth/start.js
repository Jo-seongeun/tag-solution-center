const crypto = require('crypto');

function buildAuthUrl({ clientId, redirectUri, state }) {
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: [
            'openid',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/analytics.readonly'
        ].join(' '),
        access_type: 'online',
        include_granted_scopes: 'true',
        state,
        prompt: 'consent'
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
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

module.exports = function handler(req, res) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    if (!clientId || !redirectUri) {
        res.status(500).send('OAuth 설정이 누락되었습니다.');
        return;
    }

    const state = crypto.randomBytes(16).toString('hex');
    const returnTo = req.query.returnTo || '/?page=ga4-experience&category=quick-menu';

    setCookie(res, 'ga4_oauth_state', state, {
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 10
    });

    setCookie(res, 'ga4_oauth_return', encodeURIComponent(returnTo), {
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 10
    });

    const authUrl = buildAuthUrl({ clientId, redirectUri, state });
    res.writeHead(302, { Location: authUrl });
    res.end();
}
