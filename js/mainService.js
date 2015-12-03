var app = angular.module('amgApp')

app.service('mainService', function () {
  var customerTemplate = {};
  this.setCustomerTemplate = function (template) {
    customerTemplate = template
  }

  this.getCustomerTemplate = function () {
    return customerTemplate
  }
})