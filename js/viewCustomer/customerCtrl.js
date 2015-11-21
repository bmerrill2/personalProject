var app = angular.module('amgApp')

app.controller('customerCtrl', ['$scope', 'currentAuth', '$firebaseArray', 'newCustService', function ($scope, currentAuth, $firebaseArray, newCustService) {

  $scope.getCustomers = newCustService.getCustomers();
  
  $scope.gridOptions = {
    enableSorting: true,
    enableGridMenu: true,
    data: $firebaseArray($scope.getCustomers),
    columnDefs: [
      {
        name: 'firstName',
        minWidth: 110,
        width: 110,
        enableColumnResizing: true
      },
      {
        name: 'lastName',
        width: 120,
        minWidth: 120,
        enableColumnResizing: true
      },
      {
        name: 'address',
        width: '15%',
        enableColumnResizing: true
      },
      {
        name: 'city',
        minWidth: 50,
        width: 65,
        enableColumnResizing: true
      },
      {
        name: 'state',
        minWidth: 60,
        width: 65,
        enableColumnResizing: true
      },
      {
        name: 'zip',
        minWidth: 50,
        width: 55,
        enableColumnResizing: true
      },
      {
        name: 'phone',
        minWidth: 100,
        width: 110,
        enableColumnResizing: true
      },
      {
        name: 'email',
        minWidth: 120,
        width: 150,
        enableColumnResizing: true
      },
    ]
  };



}])