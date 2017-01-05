define(['directives'],function(appDirectives){
	var sideBar = function(){
		return {
			templateUrl: '../../../includes/sideBar.html'  
		};
	};
	appDirectives.directive('sideBar',sideBar); 
});
