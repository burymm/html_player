/**
 * Created by mbury on 10/1/2014.
 */
var videoPlayer = videoPlayer || angular.module('videoPlayerApp', []);

/* themes controller */
videoPlayer.controller('ThemeController', ['$scope', 'DataFactory', function ($scope, DataFactory) {

    $scope.themeInit = function() {
        DataFactory.getThemes().
            success(function(data) {
                $scope.themesList = data;
                /* if we can receive themes list try to load saved theme from LS */
                var theme = localStorage.getItem('currentTheme');
                if (theme) {
                    $scope.selectedTheme = theme;
                }
                $scope.updateTheme();
        });
    };

    $scope.updateTheme  = function() {
        /* load css file with theme */
        $('#bootstrap-theme').attr('href', $scope.selectedTheme);
        /* save theme in LS */
        localStorage.setItem('currentTheme', $scope.selectedTheme);
    };
}]);
