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
        "services": "services",
        "playerController": "controllers/player-controller",
        "themeController": "controllers/theme-controller",
        "footerController": "controllers/footer-cotroller"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        },

        "angularjs": {
            deps: ["bootstrap"]
        },
        "services": {
            deps: ["angularjs"]
        },
        "playerController": {
            deps: ["services"]
        },
        "themeController": {
            deps: ["services"]
        },
        "footerController": {
            deps: ["angularjs"]
        }
    }
});

require(['functions', 'jquery', 'bootstrap', 'lodash', 'angularjs', 'services', 'playerController', 'themeController', 'footerController'],
    function(functions, $, bootstrap, _, angularjs, services, playerController, themeController, footerController) {

});