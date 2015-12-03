var app = angular.module('amgApp')

app.controller('customerPageCtrl', ['$scope', 'currentAuth', 'mainService', function ($scope, currentAuth, mainService) {

  $scope.customerTemplate = mainService.getCustomerTemplate()
  console.log($scope.customerTemplate);

}])