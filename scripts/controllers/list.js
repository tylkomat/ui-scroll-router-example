'use strict';
angular.module('app.controllers').controller('ListController', [
	'$scope', '$state', 'ListDatasource',
	function($scope, $state, ListDatasource) {

		var self = this;
		self.listDatasource = ListDatasource;
		self.adapter = {};

		$scope.getSetStartIndexCallback = function(item) {

			var topIndex = ListDatasource.getIndex(item);

			return function() {

				$scope.$watch('List.adapter', function(scopeAdapter) {

					if(angular.isFunction(scopeAdapter.reload)) {

						scopeAdapter.reload(topIndex < 0 ? 0 : topIndex);
					} else {

						console.log('scopeAdapter.reload is not a function');
					}
				});
			};
		};
	}
]);
