const http = require('https');

http.get('https://tag-solution-center.vercel.app/api/oauth/logout', (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers['set-cookie']);
}).on('error', (e) => {
    console.error(e);
});
