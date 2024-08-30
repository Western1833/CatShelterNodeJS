const fs = require('fs/promises');

function readFile(path) {
    return fs.readFile(path, {encoding: 'utf-8'});
}

async function catTemplate(cat) {
    const html = await readFile('./views/partials/cat.html');

    const allCats = Object.keys(cat).reduce((result, key) => {
        return result.replaceAll(`{{${key}}}`, cat[key]);
    }, html);

    return allCats;
}

module.exports = {readFile, catTemplate};