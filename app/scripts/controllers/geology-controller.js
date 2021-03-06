(function() {
    'use strict';

    angular
        .module('aquiferiumApp')
        .controller('GeologyCtrl', GeologyCtrl);

    GeologyCtrl.$inject = ['$window', '$scope', '$location', '$anchorScroll'];

    function GeologyCtrl($window, $scope, $location, $anchorScroll) {
        $scope.pageClass = 'geology';

        $scope.urlAddressLookup = 'http://www.arcgis.com/home/webmap/viewer.html?webmap=2dc9266dc088444b82dd368c2222f6f6&extent=-101.1491,28.3665,-96.6364,30.6277';

        $scope.linkModelFunc = function(url) {
            $window.open(url);
        };

        $scope.resetView = function() {
            $location.hash('.geology');
            $anchorScroll();
        };

        $scope.resetView();

        $scope.goToByScroll = function(slidenumber) {
            var navbarHeight = $('#navbar').innerHeight();
            var htmlBody = angular.element(document).find('body').css('class', '.geology');
            htmlBody.animate({
                scrollTop: $('.slide[data-slide="' + slidenumber + '"]').offset().top - navbarHeight
            }, 2000, 'easeInOutQuint');
        };

        $scope.buttonClick = function(e) {
            console.log('buttonClick firing click event from controller $scope with e == ' + e.valueOf());
            e.preventDefault();
            var dataslide = angular.element(e.target).attr('data-slide');
            $scope.goToByScroll(dataslide);
        };

        $scope.skrollrNavClick = function(e) {
            console.log('skrollrNavClick firing click event from controller $scope with e == ' + e[0]);
            e.preventDefault();
        };
    }
})();
