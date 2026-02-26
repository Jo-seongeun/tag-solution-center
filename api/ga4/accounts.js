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
        const apiRes = await fetch('https://analyticsadmin.googleapis.com/v1beta/accounts', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await apiRes.json();
        if (!apiRes.ok) {
            res.status(apiRes.status).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'failed_to_fetch_accounts' });
    }
}
