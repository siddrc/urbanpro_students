var testApp = angular.module("testApp",[]);
testApp.controller("TestController",function($scope,$http){
  $scope.textbox1 = "Hii" ;
  $scope.textbox1 = "Yo" ;

  // Client side framework...
  // directives ,ng-*
  // services 
  // $scope , $http  - ajax 
  $http.get("http://localhost:9994/start").then(function(){




  	// here
  }).catch(function(){

  })

});
