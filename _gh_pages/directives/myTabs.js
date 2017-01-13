define(['directives'],function(appDirectives){

	var myTabs = function(){
 		return {
	      restrict: 'E',
	      transclude: true,
	      scope: {},
	      controller: ['$scope', function MyTabsController($scope) {
	        var panes = $scope.panes = [];
	
	        $scope.select = function(pane) {
	          angular.forEach(panes, function(pane) {
	            pane.selected = false;
	          });
	          pane.selected = true;
	        };
	
	        this.addPane = function(pane) {
	          if (panes.length === 0) {
	            $scope.select(pane);
	          }
	          panes.push(pane);
	        };
	      }],
	      templateUrl: '../../../includes/myTabs.html'
	    };
	};
	appDirectives.directive('myTabs',myTabs); 
	
	
});
