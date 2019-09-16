const stream=require("stream");

var MyReader=new stream.Readable();
MyReader.push("abcdefghijklmnopqrstuvwxyz");
MyReader.push(null);
MyReader.pipe(process.stdout);