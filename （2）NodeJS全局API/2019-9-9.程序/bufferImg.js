
//程序③
const http=require("http");
const fs =require("fs");
const path=require("path");
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/home.jpg");
    var imgBuffer=fs.readFileSync(imgPath);
    var dataUri=imgBuffer.toString("base64");
    var imgSrc="data:image/jpg;base64,"+dataUri;
    var htmlStr="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);
console.log("server is listening 8081");

/**
 * 1.将图片的二进制数据转化为base64字符串编码格式
 * 将base64字符编码直接存到网页中，浏览器可以直接识别该编码的，将该编码直接转化为图片显示。
 * 2.使用与图片较小的情况，减少http请求数量，提高页面性能
 */
