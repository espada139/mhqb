const prefix = "http://";
const prefixS = "https://";
const host = "localhost:3000";
const separator = "/";
const baseUrl = prefix + host + separator;
const baseUrlS = prefixS + host + separator;

//https://bangumi.bilibili.com/media/web_api/search/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&pub_date=-1&style_id=-1&order=3&st=1&sort=0&season_type=1&pagesize=20&page=1
const ApiOutAnimation = "https://bangumi.bilibili.com/media/web_api/search/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&pub_date=-1&style_id=-1&order=3&st=1&sort=0&season_type=1&";

const exp = {
    ApiOutAnimation : ApiOutAnimation
}

module.exports = {exp};