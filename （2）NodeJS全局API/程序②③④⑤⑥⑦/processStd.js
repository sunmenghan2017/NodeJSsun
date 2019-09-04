var i=0;
process.stdin.on("data",function(data){
    i++;
    if(i==5){
        process.exit();
    }
    else{
        console.log("%s",data);
    }
    
})