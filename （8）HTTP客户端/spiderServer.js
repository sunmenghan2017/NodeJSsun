
/**
 * 创建server 读取index.html，响应到客户端显示
 * 
 * 在页面中发起ajax请求，取猫眼网站上爬取页面内容，使用cheerio来解析得到需要的数据，存储到数组，响应到客户端
 * 
 * 在ajax回调函数中使用响应到的数据，拼接到页面上显示
 */
const http=require('http');
const fs=require("fs");
const url=require("url");
const https=require('https');
const cheerio=require("cheerio");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        var fileContent=fs.readFileSync("./index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName=="/getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result="";
            resObj.on("data",function(chunk){
                result += chunk;
            });
            resObj.on("end",function(){
                var $=cheerio.load(result);
                var movieList=[];
                $(".movie-item-title a").each(function(){
                    var movie={};
                    movie.movirId=$(this).attr("data-val").slice(9,-1);
                    movie.movieName=$(this).text();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieRange="暂无评分";
                    }
                    else{
                        movie.movieRange=$(this).parent().next().children("");/////
                    }
                    movie.movieRange=="暂无评分";
                    console.log(movie);
                    movieList.each(movie);/////
                });
        
            });
        });

    }

}).listen(8081);
/*
const $=cheerio.load("https://maoyan.com/films");

$("ul").append("<li>li  node2</li>");
$("ul").addClass("welcome");

console.log($.html());

$("li").each(function(index,el){
    console.log($(this).text());
})

*/