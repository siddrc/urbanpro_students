var MongoClient = require("mongodb").MongoClient;
function Database(){
 
}
Database.prototype.connect = function(crudHandlerFunctions,dbCRUDParams){
   MongoClient.connect('mongodb://localhost:27017/jdd17052017', function(err, db) {
 		crudHandlerFunctions(db,dbCRUDParams);//
   }) 
}
Database.prototype.read = function(dbReadParams){
   this.connect(readHandler,dbReadParams);
} 
function readHandler(db,dbReadParams){
	var collection = db.collection(dbReadParams.collectionName);
         collection.find( dbReadParams.criteria ,  
         	dbReadParams.projection).toArray(function(error,docs){
         		dbReadParams.callAfterDatabaseAction(docs);
   })
}
Database.prototype.insert = function(){
	this.connect(insertHandler);
}
function insertHandler(){

}

module.exports = Database;

