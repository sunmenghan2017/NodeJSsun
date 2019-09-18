//任务⑤

const fs   = require('fs');
const path= require('path');
var fileName  = process.argv[2];
var pathName=path.join(__dirname,fileName);
if(typeof(pathName) === 'undefined') {
  console.error('请指定要删除的文件名或者目录名！');
  process.exit(1);
}

if(!fs.existsSync(pathName)) {
  console.error('%s not exist!',pathName);
  process.exit(2);
}

if(fs.statSync(pathName).isFile())  fs.unlinkSync(pathName);

if(fs.statSync(pathName).isDirectory()) deleteDir(pathName);

function deleteDir(folder){
    var files=fs.readdirSync(folder);
    for(var i=0;i<files.length;i++){
        var file=path.join(folder,files[i]);
        if(fs.statSync(file).isFile()){
            fs.unlinkSync(file);
            continue;
        }
        if(fs.statSync(file).isDirectory()) deleteDir(file);
    }
    fs.rmdirSync(folder);
}