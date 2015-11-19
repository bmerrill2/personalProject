var app = angular.module('amgApp')

app.controller('surveyCtrl', ['$scope', '$firebaseObject', 'currentAuth', function ($scope, $firebaseObject, currentAuth) {

  var ref = new Firebase('https://scheduletest.firebaseio.com/schedule');

  var syncObject = $firebaseObject(ref);

  syncObject.$bindTo($scope, 'schedule');

  $scope.reset = function () {

    ref.set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00 AM',
            booked: 'false'
          },
          1000: {
            time: '10:00 AM',
            booked: 'false'
          }
        }
      },
      tuesday: {
        name: 'tuesday',
        slots: {
          0900: {
            time: '9:00 AM',
            booked: 'false'
          },
          1000: {
            time: '10:00 AM',
            booked: 'false'
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          0900: {
            time: '9:00 AM',
            booked: 'false'
          },
          1000: {
            time: '10:00 AM',
            booked: 'false'
          },
          1100: {
            time: '11:00 AM',
            booked: 'false'
          }
        }
      },
    })
  }
  console.log(syncObject);
}])