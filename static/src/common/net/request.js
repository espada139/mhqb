
const requestInitTmp = {
    method : 'GET',
    headers : {
        'content-type' : 'application/json'
    },
    body : null,
    mode : 'no-cors',
    credentials : 'include',
    cache : 'default',
    redirect : 'follow',
    referrer : 'client'
}

function request(request) {
    return fetch(request);
}

function post(url,data) {
}

/**
 *
 * GET 和 HEAD请求没有body
 * @param url
 * @param data
 */
function get(url,callback) {

    var paramInit = {
        // body : JSON.stringify(data),
        // headers : {
        //     'content-type' : 'application/json'
        // }
        mode : "no-cors",
    }

    var requestInit = createRequest(url,{});

    console.log("request requestInit="+requestInit);

    // request(requestInit)
    fetch(url)
        .then(checkStatus)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log("request get data",result);
            callback(result);
        })
        .catch(function (error) {
        });

}

function post(url,callback) {

    var param = {
        pagesize : 68,
        pageindex : 1,
        tagid: 0,
        areaid: 0,
        status: 0,
        usergroup: 0,
        pay: -1,
        sort: 10,
        action: "getclasscomics"
    }

    var formData = new FormData();
    formData.append("pagesize", 68);
    formData.append("pageindex", 1);

    var paramInit = {
        method : "POST",
        body : formData,
        headers : {
            'content-type' : 'application/x-www-form-urlencoded'
        },
        mode : "no-cors"
    }

    var requestInit = createRequest(url,paramInit);

    console.log("request requestInit="+requestInit);

    // request(requestInit)
    fetch(url, paramInit)
        .then(checkStatus)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log("request post data");
            callback(result);
        })
        .catch(function (error) {
        });

}

function checkStatus(response) {
    respLog(response);
    console.log("request check status="+Object.keys(response));
    if(response.ok){
        console.log("request status="+response.status);
        return response;
    }else {
        throw new Error("Request Error");
    }
}

function responseHandle(response) {
    console.log("requestHandle response header="+response.headers);
}

function createRequest(url,initParam) {
    var requestInit = requestInitTmp;
    var requestParam = Object.assign({},requestInit,initParam);
    console.log("Request createrequest requestParam="+Object.keys(requestParam));
    var request = new Request(url,requestParam);
    console.log("Request createrequest end");
    return request;
}

function respLog(response) {
    console.log("respLog response status="+response.status+" headers key="+Object.keys(response.headers));
}

export {get,post}