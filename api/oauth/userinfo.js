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

export default async function handler(req, res) {
    const cookies = parseCookies(req.headers.cookie);
    const accessToken = cookies.ga4_access_token;
    if (!accessToken) {
        res.status(401).json({ error: 'not_authenticated' });
        return;
    }

    try {
        const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await userRes.json();
        if (!userRes.ok) {
            res.status(401).json({ error: 'invalid_token' });
            return;
        }
        res.status(200).json({ user: data });
    } catch (error) {
        res.status(500).json({ error: 'failed_to_fetch_user' });
    }
}
