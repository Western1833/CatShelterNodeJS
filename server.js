const http = require('http');
const catsDb = require('./catsDB.json');
const editCat = require('./views/catShelter.js');

const homePage = require('./views/home.js');
const stylesHomepage = require('./views/styles/homepage.style.css.js');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    if(req.url == '/') {
        res.write(homePage);
    } else if (/cats\/\d+\/edit/.test(req.url)) {
        let catId = req.url.split('/')[2];
        const cat = catsDb.find(x => x.id == catId);
        res.write(editCat(cat));
    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        res.write(stylesHomepage);
    } else {
        res.write(`
            <h1>404</h1>
        `);
    }

    res.end();
});

server.listen(5000);

console.log('Server is listening on port 5000...');