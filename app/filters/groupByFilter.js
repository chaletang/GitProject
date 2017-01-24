define(['filters'],function(appFilters){
	var uniqueItems = function (data, key) {
	    var result = [];
	    for (var i = 0; i < data.length; i++) {
	        var value = data[i][key];
	        if (result.indexOf(value) == -1) {
	            result.push(value);
	        }
	    }
	    return result;
	};
	appFilters.filter('groupBy',
            function () { 
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });
    /*appFilters.filter('groupBy', function($parse) {
	    return _.memoize(function(items, field) {
	        var getter = $parse(field);
	        return _.groupBy(items, function(item) {
	            return getter(item);
	        });
	    });
	});*/
 });