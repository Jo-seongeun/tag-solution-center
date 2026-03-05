function setCookie(res, name, value, options = {}) {
    const parts = [`${name}=${value}`];
    if (options.httpOnly) parts.push('HttpOnly');
    if (options.secure) parts.push('Secure');
    if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
    if (options.path) parts.push(`Path=${options.path}`);
    if (options.domain) parts.push(`Domain=${options.domain}`);
    if (typeof options.maxAge === 'number') parts.push(`Max-Age=${options.maxAge}`);
    if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);

    const cookieString = parts.join('; ');
    const existingCookies = res.getHeader('Set-Cookie');
    if (!existingCookies) {
        res.setHeader('Set-Cookie', cookieString);
    } else if (Array.isArray(existingCookies)) {
        res.setHeader('Set-Cookie', [...existingCookies, cookieString]);
    } else {
        res.setHeader('Set-Cookie', [existingCookies, cookieString]);
    }
}

module.exports = function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    setCookie(res, 'ga4_access_token', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        path: '/',
        maxAge: 0,
        expires: new Date(0)
    });
    setCookie(res, 'ga4_oauth_state', '', { maxAge: 0, path: '/' });
    setCookie(res, 'ga4_oauth_return', '', { maxAge: 0, path: '/' });

    res.status(200).json({ ok: true });
}
