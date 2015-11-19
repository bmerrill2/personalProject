var app = angular.module('amgApp')

app.controller('loginCtrl', function($scope, $firebaseAuth, loginService, $state){
  
  $scope.login = function(email, pass) {
    loginService.login(email, pass) 
  };
  
//  $scope.authObj = loginService.authObj;
  
//  $scope.authObj.$onAuth(function(authObj){
//    $scope.user = authObj;
//      if (authObj){
//      $state.go('customers')
//    }else{
//      $state.go('login')
//    }
//  })
  
})