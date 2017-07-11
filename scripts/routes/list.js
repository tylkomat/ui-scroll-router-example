'use strict';
angular.module('app').config([
	'$stateProvider', function($stateProvider){

		$stateProvider.state('list', {
			url: '/list',
			templateUrl: 'views/list.html',
			controller: 'ListController',
		});
	}
]);
