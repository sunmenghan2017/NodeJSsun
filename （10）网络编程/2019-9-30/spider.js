const cheerio=require("cheerio");

const $=cheerio.load("<ul><li>li  node1</li></ul>");

$("ul").append("<li>li  node2</li>");
$("ul").addClass("welcome");

console.log($.html());

$("li").each(function(index,el){
    console.log($(this).text());
})
