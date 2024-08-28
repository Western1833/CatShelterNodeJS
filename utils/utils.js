const fs = require('fs/promises');

function readFile(path) {
    return fs.readFile(path, {encoding: 'utf-8'});
}

async function catTemplate(cat) {
    const html = await readFile('./views/partials/cat.html');

    const result = html.replaceAll('{{name}}', cat.name).replace('{{description}}', cat.description).replace('{{id}}', cat.id)
    .replace('{{imageUrl}}', cat.imageUrl).replace('{{breed}}', cat.breed);

    return result;
}

module.exports = {readFile, catTemplate};