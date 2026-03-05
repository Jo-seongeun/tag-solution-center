function setCookie(res, name, value, options = {}) {
    const parts = [`${name}=${value}`];
    if (options.httpOnly) parts.push('HttpOnly');
    if (options.secure) parts.push('Secure');
    if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
    if (options.path) parts.push(`Path=${options.path}`);
    if (typeof options.maxAge === 'number') parts.push(`Max-Age=${options.maxAge}`);

    const cookieString = parts.join('; ');
    let existingCookies = res.getHeader('Set-Cookie');
    if (!existingCookies) {
        res.setHeader('Set-Cookie', cookieString);
    } else if (Array.isArray(existingCookies)) {
        res.setHeader('Set-Cookie', [...existingCookies, cookieString]);
    } else {
        res.setHeader('Set-Cookie', [existingCookies, cookieString]);
    }
}

module.exports = function handler(req, res) {
    setCookie(res, 'ga4_access_token', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        path: '/',
        maxAge: 0
    });
    res.status(200).json({ ok: true });
}
