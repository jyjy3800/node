var express =  require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();

connection.query('SELECT * FROM student WHERE no = 14;',
  function (error, results, fields) {
  if (error) throw error;
  app.get('/test', function (req, res) {

      res.send(results)
  })
  console.log('records:',results)
});

app.get('/test1', function (req, res) {

  res.send("gkd")
});

app.get('/test2', function (req, res) {
  res.sendfile("test.html");
});

app.get('/test3', function (req, res) {
  res.sendfile("test.txt");
});
