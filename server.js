const http = require('http');

const { readFile, catTemplate } = require('./utils/utils.js');

const catsDb = require('./catsDB.json');

// const editCat = require('./views/catShelter.js');
// const homePage = require('./views/home.js');
// const stylesHomepage = require('./views/styles/homepage.style.css.js');

const server = http.createServer(async (req, res) => {

    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    if(req.url == '/') {
        let homePage = await readFile('./views/homePage.html');
        const catsHtml = await Promise.all(catsDb.map(cat => catTemplate(cat)));
        homePage = homePage.replace('{{cats}}', catsHtml.join(''));
        res.write(homePage);
    } else if (/cats\/\d+\/edit/.test(req.url)) {
        // let catId = req.url.split('/')[2];
        // const cat = catsDb.find(x => x.id == catId);
        const editCatHtml = await readFile('./views/catShelter.html');
        res.write(editCatHtml);
    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        const stylesHomepage = await readFile('./views/styles/homepage.style.css');
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