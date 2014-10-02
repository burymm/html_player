/**
 * Created by mbury on 10/1/2014.
 */


var videoPlayer = videoPlayer || angular.module('videoPlayerApp', []);

videoPlayer.controller('ThemeController', function ($scope, $http) {

    $scope.themeInit = function() {
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
            $scope.selectedTheme = theme;
        }
        $scope.updateTheme();
    };




    $scope.updateTheme  = function() {
        $('#bootstrap-theme').attr('href', $scope.selectedTheme);
        localStorage.setItem('currentTheme', $scope.selectedTheme);
    };
});
