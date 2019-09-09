//程序①
var username=process.argv[2];
var passsword=process.argv[3];
console.log(username,password);

if(username!=undefined && password!=undefined){
    var loginStr=username+":"+password;
    var buf1=Buffer.from(loginStr,"utf-8");
    var base64Str=buf1.toString("base64");
    console.log(base64Str);
}
else{
    console.log("用户名密码不为空");
}
