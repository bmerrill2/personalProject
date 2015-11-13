var app = angular.module('amgApp', ['firebase', 'ui.router', 'ui.grid'])

app.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/login/loginTemplate.html',
      controller: 'loginCtrl'
  })
    .state('customers', {
      url: '/customers',
      templateUrl: 'js/viewCustomer/customerTemplate.html',
      controller: 'customerCtrl'
  })
  .state('payroll', {
      url: '/payroll',
      templateUrl: 'js/viewPayroll/payrollTemplate.html',
      controller: 'payrollCtrl'
  })
  .state('calendar', {
      url: '/calendar',
      templateUrl: 'js/viewCalendar/calTemplate.html',
      controller: 'calCtrl'
  })
  .state('survey', {
      url: '/survey',
      templateUrl: 'js/scheduleSurvey/surveyTemplate.html',
      controller: 'surveyCtrl'
  })
  .state('close', {
      url: '/close',
      templateUrl: 'js/scheduleClose/closeTemplate.html',
      controller: 'closeCtrl'
  })
  
})