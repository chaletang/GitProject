define(['app'],function(app) {
    'use strict';
	var appController = function($scope,AppService) {   
		
		$scope.app = AppService;
  		
  		initController();

        function initController() { 
            $scope.app.setCurrentUser();
        }

    }
    
    appController.$inject = ['$scope','AppService'];
    app.controller('appController', appController); 

});