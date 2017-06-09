
var router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var Database = require("../database/database");
router.get('/', function(req, res) {
     var dbReadParams = {
       collectionName : "test1",
       criteria : { name:"test" },
       projection : {}
     }
     var database =  new Database();
     dbReadParams.callAfterDatabaseAction = function(someArgument){
        res.send(someArgument);        
     }
     database.read(dbReadParams);
     
  }
);

//http://localhost:9990/start/engine

router.get('/engine', function(req, res) {

	
});

//http://localhost:9990/start/hi

router.get('/hi', function(req, res) {
      res.send("Hi, your");
});

module.exports = router;

