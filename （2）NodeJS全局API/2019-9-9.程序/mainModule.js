
/*
//程序⑤
var circleFun=require("./circleModule.js");
var circle = new circleFun(2);
circle.circumference();
circle.area();
*/

/*
 修正
⑤
 var circleModule=require("./circleModule.js");
 var  r= process.argv[2];
 var circleObj= circleModule.circleFun(r);
 console.log("圆的半径"+r)
 console.log("圆的周长"+circleObj.circumference());
 console.log("圆的面积"+circleObj.area());
 //原生模块，随node环境安装就存在的
 //自定义模块，
 //第三方模块，在命令行中进行安装的，从mpm服务器下载到本地的

*/

//程序⑥
var circle=require("./circleModule.js");
circle.circumference(2);
circle.area(2);
