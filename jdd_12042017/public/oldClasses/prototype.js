Using Prototypes also you can make objects

function HumanBeing(name,age){
  this.name = name;
  this.age = age;
}
HumanBeing.prototype.walk = function(){
  //use legs and just walk
}
HumanBeing.prototype.talk = function(name){
   //use mouth and just talk
}
HumanBeing.prototype.eat = function(){
  //eat eat and eat
  
}


var sidd = new HumanBeing("Sidd",31);

 //--- filling chocolate in the mould----freezing---- removing it out...and taking out the chocolate
sidd.walk();
sidd.sellToFriends();
sidd.eatIt();




var ajaxInitiator = new XMLHttpRequest();
ajaxInitiator.open()
ajaxInitiator.send()


function XMLHttpRequest(){


}
XMLHttpRequest.prototype.open = function(method,url,async){


}
XMLHttpRequest.prototype.send = function(){


}