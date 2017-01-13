define(['directives'],function(appDirectives){

	var notify = function(){
		return {
			restrict: 'AE',
			replace: true,
			//require: '^^topNav',
			templateUrl: '../../../includes/notify.html',
			link: function(scope, iElement, iAttrs) {
	            scope.number = 0;
	            scope.increment = function() {
	                scope.number++;
	            };  
	            scope.decrement = function() {  
	                scope.number--;
	            };
	            scope.clear = function() {
	                scope.number = 0;;
	            };  
       		}
		};
	};
	appDirectives.directive('notify',notify); 
	
	
});
