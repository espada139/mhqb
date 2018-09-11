function formatDate(date, locales, options) {
    return date.toLocaleDateString(locales, options);
}

function transDateToMD(time) {
    var date = new Date(time);
    let locales = 'zh-Hans-CN';
    let options = {month : 'long', day : 'numeric'}
    return date.toLocaleDateString(locales, options);
}

var DateUtils = {
    transDateToMD : transDateToMD
}

export {DateUtils};