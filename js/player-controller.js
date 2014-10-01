/**
 * Created by mbury on 10/1/2014.
 */


var videoPlayer = videoPlayer || angular.module('videoPlayerApp', []);

videoPlayer.controller('PlayerController', function ($scope, $http) {

    $scope.playerInit = function() {
        $scope.activeVideo = {
            title: 'Loading...'
        };

        $http({method: 'GET', url: 'data/movies.json'}).
            success(function(data, status, headers, config) {
                $scope.data = data;

                $scope.lastActive = 0;
                $scope.data[$scope.lastActive].active = true;
                $scope.updateVideo(data[$scope.lastActive], $scope.lastActive);
            }).
            error(function(data, status, headers, config) {
                alert('cant load data');
                window.location.href = 'error.html';
            });
    };

    $scope.updateVideo = function(item, $index) {
        clearVideo();
        $scope.data[$scope.lastActive].active = false;
        $scope.data[$index].active = true;
        $scope.lastActive = $index;

        $scope.activeVideo = item;
        $scope.activeVideo.actorsList = _.map(item.meta.actors, 'name').join(', ');
        $scope.activeVideo.style = 'background-image: url(' + $scope.activeVideo.images.cover + ');';

        loadVideo(item.streams);
        $scope.isVideoLoad = false;
    };

    $scope.playVideo = function($event) {
        $event.preventDefault();
        var player = document.getElementById('video-player');
        if (player.paused) {
            if (!$scope.isVideoLoad) {
                player.load();
                $scope.isVideoLoad = true;
            }
            player.play();
        } else {
            player.pause();
        }
    };


});