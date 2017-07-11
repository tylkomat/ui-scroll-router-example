'use strict';
angular.module('app', [
	'ui.router',
	'ui.scroll',
	'app.controllers',
	'app.directives',
	'app.factories',
]).run([
	'$trace',
	function($trace) {

		//$trace.enable('TRANSITION');
	}
]);
