const http = require('http');

const server = module.exports = {};

// create A simple server
server.listen = (PORT) => {
    http.createServer((req, res) => {
        // send a testing response
        res.write("Response is working");
        res.end();
    }).listen(PORT);
};