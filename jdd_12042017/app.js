console.log("Starting server...");
var express = require('express');
var router = require('express').Router();
var app = express();
app.listen(9990); 
///http://localhost:9990/start/application
var welcomePageAction = require("./server/actions/welcomePageAction");
app.use('/start', welcomePageAction);//request URLs
console.log("Server started");

	




