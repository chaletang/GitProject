define(['directives'],function(appDirectives){
	var topNav = function(){
		return {
			scope: {},
			templateUrl: '../../../includes/topNav.html',
			link: function(scope, iElement, iAttrs) {
	            scope.value = 0;
	            scope.increment = function() {
	                scope.value++;
	            };
	            scope.decrement = function() {
	                scope.value--;
	            };
        }
		};
	};
	appDirectives.directive('topNav',topNav); 
});
