var app = angular.module('amgApp', ['firebase', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages', 'ui.grid.importer', 'ui.grid.selection'])

.config(function ($mdIconProvider) {
  $mdIconProvider
    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
    .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})

app.factory('auth', ['$firebaseAuth', function ($firebaseAuth) {
    var ref = new Firebase('https://amgapp.firebasio.com');
    return $firebaseAuth(ref);
  }
])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login')

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/login/loginTemplate.html',
      controller: 'loginCtrl'
    })
    .state('customers', {
      url: '/customers',
      templateUrl: 'js/viewCustomer/customerTemplate.html',
      controller: 'customerCtrl',
      resolve: {
        'currentAuth': ['auth', function (auth) {
          return auth.$requireAuth();
        }]
      }
    })
    .state('customer', {
      url: '/customerview',
      templateUrl: 'js/customerPage/customerPage.html',
      controller: 'customerPageCtrl',
      resolve: {
        'currentAuth': ['auth', function (auth) {
          return auth.$requireAuth();
        }]
      }
    })
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'js/viewCalendar/calTemplate.html',
      controller: 'calCtrl',
      resolve: {
        'currentAuth': ['auth', function (auth) {
          return auth.$requireAuth();
        }]
      }
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'js/scheduleSurvey/surveyTemplate.html',
      controller: 'surveyCtrl',
      resolve: {
        'currentAuth': ['auth', function (auth) {
          return auth.$requireAuth();
        }]
      }
    })
    .state('newcustomer', {
      url: '/newcustomer',
      templateUrl: 'js/newCustomer/newCustTemp.html',
      controller: 'newCustCtrl',
      resolve: {
        'currentAuth': ['auth', function (auth) {
          return auth.$requireAuth();
        }]
      }
    })
})

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('amgTheme')
    .primaryPalette('red', {
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': '900'
    })
    .accentPalette('grey', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });
})