const http = require('http');

function get(url, onSuccess, onError) {

    try {
        http.get(url, function (res) {
            console.log("http-request get statusCode="+res.statusCode);
            if(res.statusCode == 200) {
                var chunks = [];
                var size = 0;
                res.on("data", (chunk) => {
                    size += chunk.length;
                    chunks.push(chunk);
                });
                res.on("end", () => {
                    var data = Buffer.concat(chunks, size);
                    onSuccess(data);
                })
            } else {
                onError({
                    code : res.statusCode,
                    msg : res.statusMessage
                });
            }
        }).on("error", (err) => {
            console.log("http-request get error="+err);
        })
    } catch (err) {
        console.log("http-request catch error "+err.message);
    }

}

function getBySync(url) {

    try {

        return new Promise(function (resolve,reject) {
            let req = http.get(url, function (res) {
                console.log("http-request get statusCode="+res.statusCode);
                if(res.statusCode == 200) {
                    var chunks = [];
                    var size = 0;
                    res.on("data", (chunk) => {
                        size += chunk.length;
                        chunks.push(chunk);
                    });
                    res.on("end", () => {
                        var data = Buffer.concat(chunks, size);
                        resolve(data);
                    });
                } else {
                    let err = {
                        code : res.statusCode,
                        msg : res.statusMessage
                    };
                    reject(err);
                }
            }).on("error", (err) => {
                console.log("http-request get error="+err);
                let error = {
                    code : 0,
                    msg : err.message
                };
                reject(error);
            });

            req.end();
        });

    } catch (err) {
        console.log("http-request catch error "+err.message);
    }

}

module.exports = {get,getBySync}