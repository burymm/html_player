/**
 * Created by mbury on 10/1/2014.
 */
var videoPlayer = videoPlayer || angular.module('videoPlayerApp', ['videoPlayerApp.factories']);

/* player controller */
videoPlayer.controller('PlayerController', ['$scope', 'DataFactory', function ($scope, DataFactory) {

    $scope.playerInit = function() {
        /* initial values */
        $scope.activeVideo = {
            title: 'Loading...'
        };

        DataFactory.getMovies()
            .success(function(data) {
                $scope.data = data;
                $scope.lastActive = 0;
                $scope.data[$scope.lastActive].active = true;
                $scope.updateVideo(data[$scope.lastActive], $scope.lastActive);
            }).error(function(data, status, headers, config) {
                alert('cant load data');
                window.location.href = '../../error.html';
            });
    };

    $scope.updateVideo = function(item, $index) {
        clearVideo();
        /* update active video in video list*/
        $scope.data[$scope.lastActive].active = false;
        $scope.data[$index].active = true;
        $scope.lastActive = $index;

        /* load new video */
        $scope.activeVideo = item;
        $scope.activeVideo.actorsList = _.map(item.meta.actors, 'name').join(', ');
        $scope.activeVideo.style = 'background-image: url(' + $scope.activeVideo.images.cover + ');'; // background image like poster

        loadVideo(item.streams);
        $scope.isVideoLoad = false; // video in not preload in player. It needs for show background poster
    };

    $scope.playVideo = function($event) {
        $event.preventDefault();
        var player = document.getElementById('video-player');
        if (player.paused) {
            /* load video if need */
            if (!$scope.isVideoLoad) {
                player.load();
                $scope.isVideoLoad = true;
            }
            player.play();
        } else {
            player.pause();
        }
    };


}]);