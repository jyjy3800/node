//var=변수타입
var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
//test1이라는 request 받는 통로(route :라우트)를 만든다.라우트는 request받는
app.get('/hello', function (req,res) {res.sendfile("hello.html")
  console.log('hihihihihi');});
//hello.html을 보내준다.(같은경로니깐 경로 안써도 됨. 경로 쓰기)
