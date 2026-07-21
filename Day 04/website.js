const http = require('http')
const fs = require('fs')

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.statusCode = 200;
        const data = (fs.readFileSync('index.html'));
        return res.end(data)
    }
    if (req.url == '/contact') {
        res.statusCode = 200;
        res.end('<h1>This is me Vivek</h1> <p> I am currently learning node.js from scratch</p>')
    }
    if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>This about Vivek</h1> <p> I am currently learning node.js from scratch</p>')
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Not found</h1>')
    }
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}) 