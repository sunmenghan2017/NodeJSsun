
/*
//程序⑤
function circleFun(r){
    this.r=r;
}

circleFun.prototype.circumference = function(){
    var r=this.r;
    var circumference=2*Math.PI*r;
    console.log(circumference);
}

circleFun.prototype.area= function(){
    var r=this.r;
    var area=Math.PI*r*r;
    console.log(area);
}
module.exports = circleFun;
*/


//程序⑥
function circumference(r){
    var r=r;
    var circumference=2*Math.PI*r;
    console.log(circumference);
}
function area(r){
    var r=r;
    var area=Math.PI*r*r;
    console.log(area);
}
module.exports={
    circumference:circumference,
    area:area
}
