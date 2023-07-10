const http = require('http');
const fs = require('fs');



http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let path = './index.html';

    switch (req.url) {
        case '/':
            path = './index.html';
            res.statusCode = 200;
            break;
        case '/index':
            path = './index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path = './about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path = './contact.html';
            res.statusCode = 301;
            break;
        case '/contact':
            path = './contact.html';
            res.statusCode = 200;
            break;
        default:
            path = './404.html';
            res.statusCode = 404;
            break;
    
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            throw err;
        }
        res.write(data.toString());
        
        res.end();
    });

}).listen(8080);