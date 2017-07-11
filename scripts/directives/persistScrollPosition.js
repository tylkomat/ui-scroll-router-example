'use strict';
angular.module('app.directives').directive('persistScrollPosition', [
	'$parse', '$transitions',
	function($parse, $transitions) {

		return {
			restrict : 'A',
			link : function(scope, element, attrs) {

				var unsubscribeOnFinish = angular.noop;
				element.on('click', function() {

					var setStartIndexFkt = $parse(attrs.persistScrollPosition)(scope);

					if(setStartIndexFkt) {

						unsubscribeOnFinish = $transitions.onFinish({}, function(transition) {

							var toState = transition.$to();
							var fromState = transition.$from();

							// moving up to a parent state
							if(fromState.name.indexOf(toState.name) === 0) {

								setStartIndexFkt();
								unsubscribeOnFinish();
							}
						});
					}
				});

			}
		};
	}
]);
