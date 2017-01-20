define(['photo'],function(photo){
	var photoList = function(){
 		return {
		    restrict: "E",
		    templateUrl: '../../../includes/photoList.html',
		    controller: ['$scope','PhotoService',
		      function photoListController($scope,PhotoService) {
		        $scope.photos = PhotoService.query();
		        $scope.orderProp = 'id';
		      }
		    ]
		  };
	};
	photo.directive('photoList',photoList); 
	
});
