const cp=require("child_process");
/**
 * 执行shell指令，启动一个子进程
 * 
 * notepad mstsc
 * 
 * exec("命令",回调函数)除了为可以启动node进程，还可以执行shell指令，启动进程
 */
cp.exec("notepad",function(err,stdout,stderr){
    if(err){
        console.log(err);
    }
    else{
        console.log(stdout);
        console.log(stderr);
    }
})