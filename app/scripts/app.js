'use strict';

angular.module('aquiferiumApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  // 'eaa.factories.preloader.images',
  'angular-carousel',
  'angular-parallax',
  'videosharing-embed',
  'leaflet-directive',
  'eaa.directives.skrollr',
  'eaa.directives.d3.maps',
  'eaa.directives.d3.interactive.recharge',
  'eaa.directives.d3.interactive.wells',
  'eaa.directives.d3.interactive.springs',
  'eaa.directives.maps.leaflet'
])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/explore.html',
      //   controller: 'ExploreCtrl'
      // })
      .when('/', {
        templateUrl: 'views/geography.html',
        controller: 'GeographyCtrl'
      })
      // .when('/explore', {
      //   templateUrl: 'views/explore.html',
      //   controller: 'ExploreCtrl'
      // })
      .when('/geography', {
        templateUrl: 'views/geography.html',
        controller: 'GeographyCtrl'
      })
      // .when('/caves-karsts', {
      //   templateUrl: 'views/caves-karsts.html',
      //   controller: 'CavesKarstsCtrl'
      // })
      .when('/geology', {
        templateUrl: 'views/geology.html',
        controller: 'GeologyCtrl'
      })
      .when('/conservation', {
        templateUrl: 'views/conservation.html',
        controller: 'ConservationCtrl'
      })
      .when('/springs', {
        templateUrl: 'views/springs.html',
        controller: 'SpringsCtrl'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      // .when('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'ContactCtrl'
      // })
      // .when('/maps-data', {
      //   templateUrl: 'views/maps-data.html',
      //   controller: 'MapsDataCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
