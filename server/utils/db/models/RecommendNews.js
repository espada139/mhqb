const db = require('../db');

module.exports = db.defineModel('recommend_news', {
    title : db.STRING(100),
    img : db.STRING,
    url : db.STRING
})