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
