const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync(__dirname + '/models');
let jsFiles = files.filter((f) => {
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let jsFile of jsFiles) {
    let name = jsFile.substring(0, jsFile.length - 3);
    console.log("model name="+name);
    module.exports[name] = require(__dirname + '/models/' + name);
}

module.exports.sync = () => {
    db.sync();
}