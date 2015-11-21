var app = angular.module('amgApp')

app.controller('loginCtrl', function ($scope, $firebaseAuth, loginService, $state) {

  $scope.login = function (email, pass) {
    loginService.login(email, pass)
  };
  
  $scope.logout = function (){  
    loginService.logout()
  }
})