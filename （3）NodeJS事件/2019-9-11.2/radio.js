const EventEmitter = require('events').EventEmitter,
      util         = require('util');

function Radio(station) {
  EventEmitter.call(this);

  var self = this;

  setTimeout(() => {
    self.emit('open', station);
  }, 0);

  setTimeout(() => {
    self.emit('stop', station);
  }, 5000);
}

util.inherits(Radio, EventEmitter);

module.exports = Radio;


// //2.子构造函数继承父构造函数prototype上面的相关方法


// const util = require('util');
// const EventEmitter = require('events');

// function MyStream() {
//   EventEmitter.call(this);
// }

// util.inherits(MyStream, EventEmitter);

// MyStream.prototype.write = function(data) {
//   this.emit('data', data);
// };

// const stream = new MyStream();

// console.log(stream instanceof EventEmitter); // true
// console.log(MyStream.super_ === EventEmitter); // true

// stream.on('data', (data) => {
//   console.log(`接收的数据："${data}"`);
// });
// stream.write('运作良好！'); // 接收的数据："运





// //////
// const util=require("util");
// function Pa(name){
//   this.name=name;
// }
// Pa.prototype.show=function(){
//   console.log(this.name);
// }
// function Child(){

// }
// util.inherits(Child,Pa);
// /**三种继承方式
//  * 1.Pa.call(this) 
//  *   Child.prototype.__proto__=Pa.prototype
//  * 2.Child extendsPa{}
//  * 3.util.inherits(Child,Pa)
//  */
