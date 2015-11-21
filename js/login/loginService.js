var app = angular.module('amgApp')

app.service('loginService', function ($firebaseAuth, $state, $location) {

  var ref = new Firebase('https://amgapp.firebaseio.com')

  this.authObj = $firebaseAuth(ref)

  this.login = function (email, pass) {
    this.authObj.$authWithPassword({
      email: email,
      password: pass
    }).then(function (authData) {
      if (authData) {
        console.log('Authenticated Successfullly with password', authData);
        $location.path('/customers')
      }
    }).catch(function (error) {
      alert('Login Failed', error)
    })

  }

  var userData = null;

  this.setUserData = function (data) {
    userData = data
  }

  this.getUserData = function () {
    return userData
  }

  this.logout = function () {
    ref.unauth();
    $state.go('login');
  }

})