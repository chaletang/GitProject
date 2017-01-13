define(['directives'],function(appDirectives){

	var topNav = function(){
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: '../../../includes/topNav.html',
			link: function(scope, iElement, iAttrs) {
			 	$(iElement).bind('click', function(e){
					
    			});
    			scope.toggleSidebar = function(){
    				$('.side-bar-container').toggleClass('open');
    			}
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
