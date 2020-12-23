var http = require('http');
var spawn = require('child_process').spawnSync;
var util = require('util');
var cluster = require('cluster');
var nbCPUs = require('os').cpus().length;
var count = 0;
const fs = require('fs');

/*
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < nbCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
*/
  var port = 80;
  var express = require('express');
  var app = express();

  app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/mainoptimized.html');
  });
  app.get('/app.js', function(req, res) {
    res.sendFile(__dirname+'/public/app.js');
  });
  app.use(express.static(__dirname + '/public'));

  app.get('/temp', function(req, res) {
    var catTemp = spawn('cat',['/sys/class/thermal/thermal_zone0/temp']);
    var time = new Date();

    res.setHeader('Content-Type', 'text/plain');
    res.end('Current CPU Temp '+(catTemp.stdout.toString()/1000).toFixed(2)+'C\n');
  });
  app.listen(port);

/*
  var server = http.createServer(function(req, res) {
    count++;
    var cat = spawn('cat',['/sys/class/thermal/thermal_zone0/temp']);
//    cat.stdout.on('data', function(data){
//      console.log(`stdout: ${data}`);
//    });
//    cat.stderr.on('data', function(data){
//      console.log(`stderr: ${data}`);
//    });
//    console.log(cat.stdout.toString());
    var time = new Date();
    console.log(process.pid+' - '+count+' - '+time+' - '+(cat.stdout.toString()/1000).toFixed(2)+'C');
    res.writeHead(200);
    res.end('Current CPU Temp '+(cat.stdout.toString()/1000).toFixed(2)+'C\n');
  });
  server.listen(port);
  */
  console.log(`Worker ${process.pid} Running on port `+port);
 //}