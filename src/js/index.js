var app = angular.module('formApp', ['ngAnimate']);

app.controller('FormCtrl', function($scope, $http, $window) {

  $scope.requestBinURL = 'http://requestb.in/1jz6x6q1';

  $scope.titles = [
    'Mr',
    'Ms',
    'Mrs'
    // Could add more, e.g. "Miss", "Dr", "Prof", etc.
  ]

  $scope.user = {};

  $scope.stage = 1;

  $scope.nextStage = function() {
    $scope.stage++;
    $window.scrollTo(0, 0);
    if ($scope.stage===2 && !$scope.user.currentDatetime) {
      // Fill in the current time to the nearest minute
      var now = new Date();
      now.setSeconds(0);
      now.setMilliseconds(0);
      $scope.user.currentDatetime = now;
    }
  };

  $scope.submit = function() {
    $scope.nextStage();
    console.log($scope.user);

    // Needs to be sent with the following Content-Type to be picked up by
    // requestb.in properly
    $http({
      method: 'post',
      url: $scope.requestBinURL,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $scope.user
    });
  };

  $scope.getUserData = function() {
    return JSON.stringify($scope.user, null, 2);
  };

});
