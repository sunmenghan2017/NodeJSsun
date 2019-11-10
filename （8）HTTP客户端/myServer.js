const http = require("http");
const querystring = require("querystring");
http.createServer(function(req,res){
    var dataStr="";
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        //console.log(dataStr);
        var dataObj=querystring.parse(dataStr);
        console.log(dataObj);
        res.end(dataObj.postData);
    })
}).listen(8081);
console.log("server is listening 8081");