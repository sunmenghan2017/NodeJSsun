const http = require("http");
const fs=require('fs');
const querystring=require("querystring");//转成对象
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/"){
        var fileContent=fs.readFileSync("../login.html");
        res.writeHead(200,{"content-Type":"text/html"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/login"){
        var dataStr="";
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        req.on("end",function(){
            var dataObj=querystring.parse(dataStr);
            console.log(dataObj);
            res.end(dataObj.userList);
        })
    }   

}).listen(8083);
console.log("server is listening 8083");