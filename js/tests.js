/**
 * Created by mbury on 10/2/2014.
 */


var videoPlayer = videoPlayer || angular.module('videoPlayerApp', []);

/* jasmine specs for controllers go here */
describe('HTML Player', function () {

    describe('FooterController', function () {

        beforeEach(module('videoPlayerApp'));

        it('Have version', inject(function ($controller, $rootScope) {
            var ctrl = $controller('FooterController', {$scope: $rootScope});
            expect(typeof $rootScope.version ).toBe('string');
        }));
    });

    describe('ThemeController', function () {

        beforeEach(module('videoPlayerApp'));

        it('Themes Init exist', inject(function ($controller, $rootScope, DataFactory) {
            var themeController = $controller('ThemeController', {$scope: $rootScope, DataFactory: DataFactory});
            expect(typeof $rootScope.$root.themeInit).toBe('function');
        }));

        it('Themes update exist', inject(function ($controller, $rootScope, DataFactory) {
            var themeController = $controller('ThemeController', {$scope: $rootScope, DataFactory: DataFactory});
            expect(typeof $rootScope.$root.updateTheme).toBe('function');
        }));
    });
});