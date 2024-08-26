const http = require('http');

const homePage = require('./views/home.js');
const stylesHomepage = require('./views/styles/homepage.style.css.js');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    switch(req.url){
        case '/':
            res.write(homePage);
                break;
        case '/content/styles/site.css':
            res.writeHead(200, {
                'Content-type': 'text/css'
            });
            res.write(stylesHomepage);
                break;
        default:
            res.write(`
                    <h1>404</h1>
                `);
            break;
    }

    res.end();
});

server.listen(5000);

console.log('Server is listening on port 5000...');