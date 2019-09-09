function Bomb (message) {
    this.message=message;
    this.explode=function(){
        console.log(message);
    }
}
var bomb1 = new Bomb("bomb!!!");

setTimeout(function(){
    bomb1.explode();
},2000);

//以下为修正版
/**
 * 
function Bomb (message) {
    this.message="bomb!!!";
}
Bomb.protoType.explode=function(){
    console.log(this);
        console.log(this.message);
}
var bomb=new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);
 */
