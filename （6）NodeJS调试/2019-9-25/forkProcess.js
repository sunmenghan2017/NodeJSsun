/**
 * fork()专门用来启动node进程
 * 其父子进程间可通信
 */
const cp=require("child_process");
var fork1=cp.fork("childProcess1.js",["javascript"]);
fork1.on("close",function(chunk){
    console.log(chunk.toString());
})

fork1.send("parent");

fork1.on("message",function(msg){
    console.log(typeof msg);
})