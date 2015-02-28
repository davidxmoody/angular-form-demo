var app = angular.module('formApp', []);

app.controller('FormCtrl', function($scope, $window) {

  $scope.titles = [
    'Mr',
    'Ms',
    'Mrs'
    // Could add more, e.g. "Miss", "Dr", "Prof", etc.
  ]

  // Fill in the current time to the nearest minute
  var now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);

  $scope.user = {
    currentDatetime: now
  };

  $scope.stage = 1;

  $scope.nextStage = function() {
    $scope.stage++;
    $window.scrollTo(0, 0);
  };

  $scope.submit = function() {
    console.log($scope.user);
    $scope.nextStage();
  };

  $scope.getUserData = function() {
    return JSON.stringify($scope.user, null, 2);
  };

});
