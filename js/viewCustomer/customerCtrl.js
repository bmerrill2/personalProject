var app = angular.module('amgApp')

app.controller('customerCtrl', ['$scope', 'currentAuth', '$firebaseArray', 'newCustService', 'uiGridConstants', '$state', 'mainService', function ($scope, currentAuth, $firebaseArray, newCustService, uiGridConstants, $state, mainService) {

  $scope.getCustomers = newCustService.getCustomers();

  $scope.viewCustomer = function (row) {
    $state.go('customer');
    console.log(row);
    mainService.setCustomerTemplate(row.entity)
  }

  $scope.gridOptions = {
    enableSorting: true,
    enableFiltering: true,
    enableGridMenu: true,
    data: $firebaseArray($scope.getCustomers),
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    rowTemplate: "<div ng-click='grid.appScope.viewCustomer(row)' ng-repeat='(colRenderIndex, col) in colContainer.renderedColumns track by col.uid' class='ui-grid-cell' ng-class='col.colIndex()' ui-grid-cell></div>",
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
        enableColumnResizing: true,
        enableFiltering: false
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
      {
        name: 'ssn',
        minWidth: 80,
        width: 80,
        enableColumnResizing: true
      },
      {
        name: 'dob',
        minWidth: 80,
        width: 80,
        enableColumnResizing: true
      },
      {
        name: 'repName',
        minWidth: 120,
        width: 150,
        enableColumnResizing: true
      },
      {
        name: 'repPhoneNumber',
        minWidth: 120,
        width: 150,
        enableColumnResizing: true
      },
    ]
  };



}])