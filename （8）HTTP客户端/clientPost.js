const http = require("http");
const querystring = require("querystring");

var option = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}

var  username=process.argv[2];
var password=process.argv[3];
var postData={username:username,password:password};
var postData=querystring.stringify(postData);

var req = http.request(option,function(res){

});
req.write(postData);
req.end();
