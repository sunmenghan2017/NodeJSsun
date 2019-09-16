var Dog=require("./dog.js");//引入
//console.log(Dog);
//实例化
var dog1=new Dog("taidi",4);
var dog2=new Dog("zangao",8);

function barkFun(){
    console.log(this.name+" barked!"+" energy:"+this.energy);
}
dog1.on("bark",barkFun);
var intervalId1= setInterval(function() {
    if(dog1.energy>=0){
        dog1.emit("bark");
    }
    else{
        intervalId1.unref();
    }
    dog1.energy=dog1.energy-1
}, 1000);
dog2.on("bark",barkFun);
var intervalId2= setInterval(function() {
    if(dog2.energy>=0){
        dog2.emit("bark");
    }
    else{
        intervalId2.unref();
    }
    dog2.energy=dog2.energy-1
}, 1000);
    
dog2.on("bark",barkFun);