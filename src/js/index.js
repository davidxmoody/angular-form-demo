var app = angular.module('formApp', []);

app.controller('FormCtrl', function($scope) {

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
  };

  $scope.submit = function() {
    console.log($scope.user);
  };

});
