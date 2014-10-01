/**
 * Created by mbury on 9/30/2014.
 */

function clearVideo() {
    document.getElementById('video-player').pause();

    _($('#video-player source')).forEach(function(source) {
        source.removeAttribute('src');
    });

    document.getElementById('video-player').load();
}

function loadVideo(streams) {
    _(streams).forEach(function(stream) {
        var source = document.getElementById(stream.type + 'src');
        source.src = stream.url;
    });

    /*document.getElementById('video-player').load();*/
}


var videoPlayer = angular.module('videoPlayerApp', []);

videoPlayer.controller('PlayerController', function ($scope, $http) {

    $scope.init = function() {
        $scope.activeVideo = {
            title: 'Loading...'
        };

        $scope.themesList = [
            {
                name: 'Default',
                url: ''
            },
            {
                name: 'Broken eyes',
                url: 'http://code.divshot.com/geo-bootstrap/swatch/bootstrap.min.css'
            },
            {
                name: 'Cyborg',
                url: 'http://bootswatch.com/2/cyborg/bootstrap.min.css'
            },
            {
                name: 'Super Hero',
                url: 'http://bootswatch.com/superhero/bootstrap.min.css'
            }
        ];


        var theme = localStorage.getItem('currentTheme');
        if (theme) {
            $('#bootstrap-theme').attr('href', theme);
        }

        $http({method: 'GET', url: 'data/movies.json'}).
            success(function(data, status, headers, config) {
                $scope.data = data;
                $scope.updateVideo(data[0]);
            }).
            error(function(data, status, headers, config) {
                alert('cant load data');
                window.location.href = 'error.html';
            });
    };

    $scope.updateVideo = function(item) {
        clearVideo();

        $scope.activeVideo = item;
        $scope.activeVideo.actorsList = _.map(item.meta.actors, 'name').join(', ');

        loadVideo(item.streams);
        $scope.isVideoLoad = false;
    };

    $scope.playVideo = function() {
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

    $scope.updateTheme  = function() {
       $('#bootstrap-theme').attr('href', $scope.selectedTheme);
       localStorage.setItem('currentTheme', $scope.selectedTheme);
    };
});

videoPlayer.controller('ErrorController', function($scope) {

});
