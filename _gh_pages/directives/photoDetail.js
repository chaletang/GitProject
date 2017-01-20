define(['photo'],function(photo){

	var photoDetail = function(){
 		return {
		    restrict: "E",
		    templateUrl: '../../../includes/photoDetail.html'
		  };
	};
	photo.directive('photoDetail',photoDetail); 
	
});
