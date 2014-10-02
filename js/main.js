/**
 * Created by mbury on 9/30/2014.
 */

require.config({
    baseUrl : 'js',
    paths: {
        "jquery": ["https://code.jquery.com/jquery-2.1.1.min", "vendor/jquery-2.1.1.min"],
        "bootstrap": ["http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min", "vendor/bootstrap.min"],
        "lodash": ["http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min", "vendor/lodash.min"],
        "angularjs": ["http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min", "vendor/angular.min"],
        "playerController": "player-controller",
        "themeController": "theme-controller"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        },

        "angularjs": {
            deps: ["bootstrap"]
        },
        "playerController": {
            deps: ["angularjs", "services"]
        },
        "themeController": {
            deps: ["angularjs"]
        }
    }
});

require(['functions', 'jquery', 'bootstrap', 'lodash', 'angularjs', 'playerController', 'themeController'],
    function(functions, $, bootstrap, _, angularjs, playerController, themeController) {

});