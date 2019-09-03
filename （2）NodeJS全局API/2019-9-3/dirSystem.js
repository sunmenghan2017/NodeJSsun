//1.引入http原生模块
const http = require("http");
const fs = require("fs");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里的内容
    //5.得到当前程序执行所在系统
    var sys =process.platform;
    var htmlPath="";
    //console.log(sys);
    switch(sys){
        case "linux":
            htmlPath=__dirname+"/view/index.html";break;
        case "win32":
            htmlPath=__dirname+"\\view\\index.html";break;
        default:
            console.log("unknown system");break;
    }
    var htmlPath = __dirname+"\\view\\index.html";//相对路径
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//3.服务监听一个端口
server.listen(8086);
console.log("server is listening 8086");