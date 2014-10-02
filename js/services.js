/**
 * Created by mbury on 10/2/2014.
 */


var videoPlayer = videoPlayer || angular.module('videoPlayerApp', []);

videoPlayer.factory('DataFactory', ['$http', function($http){
    return {
        getMovies: function() {
            return $http.get('data/movies.json');
        },
        getThemes: function() {
            return $http.get('data/themes.json');
        }
    };
}]);