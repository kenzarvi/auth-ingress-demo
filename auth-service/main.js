const http = require('http');
const host = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.headers.authorization) {
        res.statusCode = 200;
        res.end();
    }
    else {
        res.statusCode = 401;
        res.end();
    }
});
server.listen(port, host, ()=> {
    console.log(`Server running at http://${host}:${port}`);
})
