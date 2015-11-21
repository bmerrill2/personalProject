var app = angular.module('amgApp')

app.service('newCustService', function ($firebaseAuth, $state, $location) {
  
  var custRef = new Firebase('https://amgapp.firebaseio.com')
  
  this.newCustomers = function () {
    return new Firebase(custRef + '/customer')
  }
  
  this.getCustomers = function() {
    return new Firebase(custRef + '/customer')
  }
  
})