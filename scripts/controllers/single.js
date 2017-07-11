'use strict';
angular.module('app.controllers').controller('SingleController', [
	'$scope', 'data',
	function($scope, data) {

		$scope.item = data.item;
	}
]);
