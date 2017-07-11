'use strict';
angular.module('app').config([
	'$urlRouterProvider', '$locationProvider',
	function($urlRouterProvider, $locationProvider) {

		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise(function($injector, $location) {

			$location.path('/list');
		});
	}
]);
