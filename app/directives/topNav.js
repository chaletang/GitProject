define(['directives'],function(appDirectives){
	var topNav = function(){
		return {
			templateUrl: '../../../includes/topNav.html'  
		};
	};
	appDirectives.directive('topNav',topNav); 
});
