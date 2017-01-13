define(['directives'],function(appDirectives){
	
	var sideBar = function(){
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: '../../../includes/sideBar.html', 
			controller: ['$scope', function sideBarController($scope) {
				
			}],
			link: function(scope, iElement, iAttrs) {
				
			}
		};
	};
	appDirectives.directive('sideBar',sideBar); 
	
});
