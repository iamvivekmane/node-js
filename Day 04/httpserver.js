const http = require('http')

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is me Vivek</h1> <p> I am currently learning node.js from scratch</p>')
})


server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}) 