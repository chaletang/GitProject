define(['photo'],function(photo){
	var photoListController = function($scope,$location,PhotoService){
		$scope.photos = PhotoService.query();
        $scope.orderProp = 'id';
        $scope.location = $location;
		$scope.$watch('location.path()', function (path) {
			$scope.isPage = (path === '/photoList') ? true : false;
			$scope.limitNum = (path != '/photoList') ? 4 : null;
		});
	}
	photoListController.$inject = ['$scope','$location','PhotoService'];
	photo.controller('photoListController',photoListController);
	
	var photoList = function(){
 		return {
		    restrict: "E",
		    templateUrl: '../../../includes/photoList.html',
		    controller: photoListController,
		    link:function(scope, element, attrs) {
	    		require(['bookBlock'],function(){
					if($("#bb-bookblock-vertical").length > 0){
						initBookBlock('#bb-bookblock-vertical');
					}
					if($("#bb-bookblock-horizontal").length > 0){
						initBookBlock('#bb-bookblock-horizontal'); 
					}
					function initBookBlock(container) {
						var config = {
							$bookBlock : $(container),
							$navNext : $(".bb-nav-next[data-target='" + container + "']"),
							$navPrev : $(".bb-nav-prev[data-target='" + container + "']"),
							$navFirst : $(".bb-nav-first[data-target='" + container + "']"),
							$navLast : $(".bb-nav-last[data-target='" + container + "']")
						}
						config.$bookBlock.bookblock({
							speed : 800,
							shadowSides : 0.8,
							shadowFlip : 0.7,
							orientation : config.$bookBlock.attr("data-orientation")
						});
						initBookEvents(config);
					}
					
					function initBookEvents(config) {
						var $slides = config.$bookBlock.children();
						// add navigation events
						config.$navNext.on('click touchstart', function() {
							config.$bookBlock.bookblock('next');
							return false;
						});
					
						config.$navPrev.on('click touchstart', function() {
							config.$bookBlock.bookblock('prev');
							return false;
						});
					
						config.$navFirst.on('click touchstart', function() {
							config.$bookBlock.bookblock('first');
							return false;
						});
					
						config.$navLast.on('click touchstart', function() {
							config.$bookBlock.bookblock('last');
							return false;
						});
					
						// add swipe events
						$slides.on({
							'swipeleft' : function(event) {
								config.$bookBlock.bookblock('next');
								return false;
							},
							'swiperight' : function(event) {
								config.$bookBlock.bookblock('prev');
								return false;
							}
						});
					
						// add keyboard events
						$(document).keydown(function(e) {
							var keyCode = e.keyCode || e.which, arrow = {
								left : 37,
								up : 38,
								right : 39,
								down : 40
							};
					
							switch (keyCode) {
							case arrow.left:
								config.$bookBlock.bookblock('prev');
								break;
							case arrow.right:
								config.$bookBlock.bookblock('next');
								break;
							}
						});
					}
	    		})
		    }
		  };
	};
	photo.directive('photoList',photoList); 
	
});
