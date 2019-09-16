const fs=require("fs");
const http=require("http");
const path =require("path");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/data.txt");
    //streamReader是一个可读流对象 source（数据来源）
    var streamReader=fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081);
console.log("listening 8081");