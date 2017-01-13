define(['directives'],function(appDirectives){

	var myPane = function(){
		return {
	      require: '^^myTabs',
	      restrict: 'E',
	      transclude: true,
	      scope: {
	        title: '@'
	      },
	      link: function(scope, element, attrs, tabsCtrl) {
	        tabsCtrl.addPane(scope);
	      },
	      templateUrl: '../../../includes/myPane.html'
	    };
	};
	appDirectives.directive('myPane',myPane); 
	
	
});
