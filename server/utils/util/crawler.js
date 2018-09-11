const cheerio = require('cheerio');

function getHandler(text) {
    let handler = cheerio.load(text);
    return handler;
}

module.exports = {getHandler}