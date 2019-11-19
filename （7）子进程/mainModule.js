/**自定义模块，自定义js文件，通过require引入
 * require("相对路径")
 * 被引入模块通过module.exports来对外公布一些自己的方法火属性
 * 主模块可以访问被引用如模块公布的方法或属性
 */
var child=require("./childModule.js");
console.log(child);
child.sayHello();
child.showName();