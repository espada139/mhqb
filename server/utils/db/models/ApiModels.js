const db = require('../db');

var Article = db.defineModel('article', {
    title : db.STRING,
    content : db.TEXT,
    images : db.STRING,
    category : db.INTEGER,
    author : db.STRING,
    post_time : db.BIGINT
});

var RecommendCartoons = db.defineModel('recommend_cartoons', {
    title : db.STRING(100),
    img : db.STRING,
    url : db.STRING,
    article_id : db.STRING
});

var exp = {
    article : Article,
    recommendCartoons : RecommendCartoons
}

module.exports = exp;