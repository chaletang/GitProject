define(['directives'],function(appDirectives){

	var myBox = function(){
 		return {
	      restrict: 'E',
	      transclude: true,
	      scope: {title: '@', boxstyle:'@'},
	      controller: ['$scope', function MyBoxController($scope) { 
	      		$scope.boxType = 'large';
				$scope.zoom = function(){
					$scope.boxType == 'large'?$scope.boxType:'';
				}
	      }],
	      link: function(scope, element, attrs){

	      },
	      templateUrl: '../../../includes/myBox.html'
	    };
	};
	appDirectives.directive('myBox',myBox); 
	
	
});
