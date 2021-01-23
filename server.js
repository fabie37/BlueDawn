const http = require('http');

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;
    res.setHeader('Content-type', 'text/html');
    const pwd = headers.password;
    if (method == 'GET' && pwd == 'Hello') {
        res.write('<h1> Logged In </h1>');
    } else {
        res.write('<h1> Wrong Password </h1>');
    }
    res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
