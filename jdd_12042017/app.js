console.log("Starting server...");
var express = require('express');
var router = require('express').Router();
var app = express();
app.listen(9994); 
///http://localhost:9990/start
var welcomePageAction = require("./server/actions/welcomePageAction");
app.use('/start', welcomePageAction);//request URLs
console.log("Server started");

	




