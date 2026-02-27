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
    setCookie(res, 'ga4_access_token', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
        path: '/',
        maxAge: 0
    });
    res.status(200).json({ ok: true });
}
