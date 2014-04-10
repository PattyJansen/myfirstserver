var express = require('express');
var server = express();

server.use(express.static(__dirname + "/public"));

server.listen(3000)
console.log("server is listening on port 3000");