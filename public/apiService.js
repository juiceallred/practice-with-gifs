angular.module('gifsChat')

.service('apiService', function ($http) {

  this.getGif = function (queryText, callback) {
    var uri = 'http://api.giphy.com/v1/gifs/search?q=' + queryText + '&api_key=dc6zaTOxFJmzC';

    // TODO: do something awesome
  };

});
