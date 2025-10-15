const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './';

    switch(req.url) {
        case "/":
            path += 'index.html';
            break;
        case "/about":
            path += 'about.html';
            break;
        case "/contact-me":
            path += 'about-me.html';
            break;
        default:
            path += '404.html';
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data)
        }
    })
})

server.listen(3000, 'localhost')