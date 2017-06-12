var Database = require("../database/database");
var router = require('express').Router();
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
module.exports = router;
