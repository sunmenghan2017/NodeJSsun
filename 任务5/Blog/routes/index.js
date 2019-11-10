var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var data=require('../data.json');
var List=data.chapterList;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
/* GET list page. */
router.get('/list',function(req,res,next){
  res.render('list', {List:List});
})
/* POST 登录验证 && GET login page. */
router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  if(username == data.users[0].username && pwd == data.users[0].password){
    res.render('list', {List:List});
  }
  else{
    res.json({ret_code : 1, ret_msg : '账号或密码错误'});// 若登录失败，重定向到登录页面
  }
});

module.exports = router;
