'use strict';
angular.module('app.factories').factory('ListDatasource', function() {

	var cache = [];
	var maxReached = false;

	// fake http data limit
	var max = 100;

	function loadItems(limit, offset, cb) {

		var data = [];
		for(var i = offset; i < offset + limit; i++) {

			if(i >= max) {
				break;
			}

			data.push(i);
		}

		if(data.length < limit) {

			maxReached = true;
		}

		cache = cache.concat(data);
		// fake http request
		setTimeout(function() {

			cb(data);
		}, 300);
	}

	return {
		getCache: function() {

			return cache;
		},

		resetDataSource: function() {

			cache = [];
			maxReached = false;
		},

		getIndex: function(item) {

			return item;
		},

		get: function(index, count, cb) {

			var internalIndex = index - 1;
			var internalCount = count;

			if(
				internalIndex < 0 && internalIndex + internalCount <= 0 ||
				internalIndex > cache.length && maxReached === true
			) {

				return cb([]);
			}

			if(internalIndex < 0 && internalIndex + internalCount > 0) {

				internalCount = internalIndex + internalCount;
				internalIndex = 0;
			}

			if(internalIndex < cache.length) {

				var end = internalIndex + internalCount;

				return cb(cache.slice(internalIndex, end > cache.length ? cache.length : end));
			}

			loadItems(internalCount, internalIndex, cb);
		}
	};
});
