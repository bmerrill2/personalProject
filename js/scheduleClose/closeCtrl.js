var app = angular.module('amgApp')

app.controller('closeCtrl', ['$scope', function ($scope) {
  $scope.customer = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'UT',
    zip: '',
    phone: '',
    email: '',
    electric: '',
    rates: '',
    rep: '',
    repNumber: ''
  };

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) {
    return {
      abbrev: state
    };
  })

}]);