const db = require('../db');

module.exports = db.defineModel('recent_updates',{
    title : db.STRING,
    num : db.STRING,
    updateDate : db.BIGINT,
    icon : db.STRING,
    url : db.STRING
})