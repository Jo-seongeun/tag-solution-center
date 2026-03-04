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

module.exports = function handler(req, res) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    if (!clientId || !redirectUri) {
        res.status(500).send('OAuth 설정이 누락되었습니다.');
        return;
    }

    const state = crypto.randomBytes(16).toString('hex');
    const returnTo = req.query.returnTo || '/?page=ga4-experience&category=quick-menu';

    const cookieState = `ga4_oauth_state=${state}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=600`;
    const cookieReturn = `ga4_oauth_return=${encodeURIComponent(returnTo)}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=600`;

    res.setHeader('Set-Cookie', [cookieState, cookieReturn]);

    const authUrl = buildAuthUrl({ clientId, redirectUri, state });
    res.setHeader('Location', authUrl);
    res.status(302).end();
}
