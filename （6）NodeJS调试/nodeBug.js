//错误提示和错误行号

/*SyntaxError表示语法错误*/
//va a=1;//关键字错误

/*
*ReferrenceError表示引用错误
*在某个位置上使用了未定义的变量
*/
//console.log(a);


//类型的错误 ：特定的方法的参数必须是特定类型的变量
/*
const http=require("http");
http.createServer(function(req,res){
    res.write("hello");//TypeError: res.write is not a function
}).listen(8081);
*/
/*
var username="zhangsan";
username();//TypeError
*/
/*
const fs =require("fs");
fs.readFileSync(true);//TypeError
*/

///////////////////////
/**一.使用debugger
 * 1.debugger;设置断点
 * 2.node inspect 文件名
 * 3. c 继续执行 s o
 * 4.watch('变量名')
 * 5.watchers查看监听的变量
 * 6.unwatch('变量名')
 * 7.restart 重启脚本
 */

 ///////////////////////
/**二.使用node-inpect调试
 * npm install node-inspect –g 全局安装该模块
 * node --inspect server.js 来启动要调试的脚本文件。
 * 打开Chome浏览器输入地址：chrome://inspect
 * 点击target对应地址，开启调试。
 * 
 */

 //////////////////////
 /**三.借助于vscode调试
 *
 */

 ///////////
 const fs=require("fs");
/**
 * try catch只能捕获同步代码中的异常
 * 
 */
try{
    fs.readFileSync(__filename,function(err,data){
        if(errpr){
            console.log("error");
        }
        else{
            console.log(data);
        }

    })
}catch(error){
    console.log(error,message);
}

process.on("uncaughtException",fufnction(err){
    if(err){
        console.log(err);
    }
})


///////////////
//创建子进程
exec()
execFile()
spawn()
fork()