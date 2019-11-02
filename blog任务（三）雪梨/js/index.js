
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring=require('querystring');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    
    if(pathName=='/list'){
        var liPath = path.join(__dirname,"../chapterList.html");
        var listContent = fs.readFileSync(liPath);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(listContent);
        console.log("list");
    }
    else if(pathName=='/login'){//ok
        showLogin(res);
        loginIn(req,res);
        // showLoImg(res);
        console.log("login");
    }
    else if(pathName=='/listmanager'){
        var filePath = path.join(__dirname,"../list.html");
        var fileContent=fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(fileContent);
        console.log("listmanager");
    }   
    else if(pathName=='/addChapter'){//ok
        var filePath = path.join(__dirname,"../addChapter.html");
        var fileContent=fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(fileContent);
        console.log("addChapter");
    }   
    else if(pathName=='/detail?chapterId=4'){//ok
        var filePath = path.join(__dirname,"../chapter.html");
        var fileContent=fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(fileContent);
        console.log("detail?chapterId=4");
    }
    else if(pathName=='/login' && req.method == 'POST'){
        uploadFile(req,res);
    }
    else if(pathName.indexOf('login')>=0 && req.method == 'GET'){
        //客户端要图片的请求
        // 把图片都响应回去
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,"Content-Type","image/jpg");
        res.end(imgContent);
    }
    else if(pathName=='/getlist'){
        //获取upload文件夹下的图片信息
        var files = fs.readdirSync(__dirname+'../images');
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }

}).listen(8083);
function showLogin(res){
    var fileContent=fs.readFileSync("../login.html");
    res.writeHead(200,{'Content-Type':'text/html;image/jpg;charset=utf-8'});
    res.write(fileContent);
    res.end();
}
function loginIn(req,res){
    var formData='';
    req.on("data",function(chunk){
        formData += chunk;
    })
    req.on("end",function(){
        console.log(formData);
        var formObj=querystring.parse(formData);
        if(formObj.username=="admin"&&formObj.pwd=="admin"){

            res.setHeader('Set-Cookie','username=admin');
            res.end("login success");
        }
        else{
            res.end('login error');
        }
    })
}
// function showLoImg(res){
//     var imgContent = fs.readFileSync("login_bg.jpg");
//     res.writeHead(200,{"Content-Type":"image/jpg"});
//     res.write(imgContent);
//     res.end();
// }
console.log('server is listening 8083');

function uploadFile(req,res){
    var dataStr = '';//用来接收数据
    req.setEncoding('binary');
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length - 2);//进行字符串截取
        var imgData = '';
        for(var i=0;i<bufArr.length;i++){
            imgData +=bufArr[i];
        }
        var buf = Buffer.from(imgData,"binary");
        var timer=(new Date()).getTime();
        fs.writeFileSync(__dirname+'../images/'+timer+'.jpg',buf,{'encoding':'binary'});
        // var imgContent = fs.readFileSync("../login_bg.jpg");
        res.writeHead(200,{"Content-Type":"image/jpg"});
        // res.write(imgContent);
        
        res.end('submit success');
    })
}
function showImg(res){
    var imgPath = path.join(__dirname,"../images");
    var imgContent = fs.readdirSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    res.write(imgContent);
    res.end();
}