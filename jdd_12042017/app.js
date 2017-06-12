console.log("Starting server...");
var express = require('express');
var app = express();
app.listen(9990); 
app.use('/', express.static(__dirname + '/public'));
var welcomePageAction = require("./server/actions/welcomePageAction");
var ajaxAction = require("./server/actions/ajaxAction");
app.use('/', welcomePageAction);
app.use('/ajax', ajaxAction);
console.log("Server started");

	




