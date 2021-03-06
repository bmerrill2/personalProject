var app = angular.module('amgApp')

app.controller('newCustCtrl', ['$scope', 'currentAuth', 'newCustService', '$firebaseArray', function ($scope, currentAuth, newCustService, $firebaseArray) {

  $scope.customer = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    ssn: '',
    dob: '',
    repName: '',
    repPhoneNumber: ''
  };

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) {
    return {
      abbrev: state
    };
  })

  $scope.utilityProviders = ['Pacific Gas & Electric', 'Southern California Edison']

  $scope.custObj = newCustService.newCustomers()

  $scope.customers = $firebaseArray($scope.custObj)

  $scope.newCustomer = function (firstName, lastName, address, city, state, zip, phone, email, ssn, dob, repName, repPhoneNumber) {
    $scope.customers.$add({
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      email: email,
      ssn: ssn,
      dob: dob,
      repName: repName,
      repPhoneNumber: repPhoneNumber
    })
    $scope.customerForm.$setPristine()
  }

}]);