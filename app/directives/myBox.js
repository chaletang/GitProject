define(['directives'],function(appDirectives){

	var myBox = function(){
 		return {
	      restrict: 'E',
	      transclude: true,
	      scope: {title: '@', bgcolor:'@'},
	      controller: ['$scope', function MyBoxController($scope) {
	      		$scope.boxType = '';
				$scope.zoomIn = function(){
					$scope.boxType = 'large';
				}
				$scope.zoomOut = function(){
					$scope.boxType = '';
				}
	      }],
	      link: function(scope, element, attrs){

	      },
	      templateUrl: '../../../includes/myBox.html'
	    };
	};
	appDirectives.directive('myBox',myBox); 
	
	
});
