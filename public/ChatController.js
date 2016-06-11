angular.module('gifsChat')

.controller('ChatController', function ($scope, apiService) {

  // TODO: call giphy api and display gifst to front end
  $scope.gifsArray = [];

  $scope.sendChat = function() {
    apiService.getGif($scope.queryText)
    .then(function(response) {
      console.warn(response.data.data[0]);
      $scope.gifsArray.unshift(response.data.data[0]);
      console.info
    })
    .catch(function(err) {
      return console.error(err);

    });
  };

});
