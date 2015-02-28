var app = angular.module('formApp', []);

app.controller('FormCtrl', function($scope) {
  $scope.user = {};
  $scope.stage = 1;
  $scope.nextStage = function() {
    $scope.stage++;
  };
  $scope.submit = function() {
    console.log($scope.user);
  };
});
