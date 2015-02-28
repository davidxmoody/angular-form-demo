var app = angular.module('formApp', []);

app.controller('FormCtrl', function($scope) {
  $scope.stage = 1;
  $scope.nextStage = function() {
    $scope.stage++;
  };
});
