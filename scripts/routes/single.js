'use strict';
angular.module('app').config([
	'$stateProvider', function($stateProvider){

		$stateProvider.state('list.single', {
			url: '/:index',
			views: {
				'list':{
					templateUrl: 'views/single.html',
					controller: 'SingleController'
				}
			},
			resolve: {
				data: [
					'$transition$',
					function($transition$) {

						var params = $transition$.params();

						return {
							item: params.index,
						};
					}
				],
			},
			resolvePolicy: {
				data: { when: 'EAGER'}
			}
		});
	}
]);
