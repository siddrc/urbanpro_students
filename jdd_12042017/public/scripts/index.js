var testApp = angular.module("testApp",[]);
testApp.controller("TestController",function($scope,$http){
  $scope.textbox1 = "Hii" ;
  $scope.textbox1 = "Yo" ;

  // Client side framework...
  // directives ,ng-*
  // services 
  // $scope , $http  - ajax 
  // http://localhost:9990/ajax
  $http.get("/ajax").then(function(responseFromServer){
  
  console.log("responseFromServer "+JSON.stringify(responseFromServer,null,2));
   


  	// here
  }).catch(function(){

  })

});
