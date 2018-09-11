const prefix = "http://";
const host = "localhost:3000";
const separator = "/";
const baseUrl = prefix + host + separator;

const ApiGetArticle = baseUrl + "api/getArticle/";
//params : page=1&pagesize=24
const ApiGetAnimations = baseUrl + "api/getAnimations";

const PathHome = baseUrl + "home/";
const PathMore = baseUrl + "home/more/";

const exp = {
    ApiGetArticle : ApiGetArticle,
    ApiGetAnimations : ApiGetAnimations,
    PathHome : PathHome,
    PathMore : PathMore
}

export {exp};