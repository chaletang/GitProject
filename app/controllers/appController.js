define(['app'],function(app) {
    'use strict';
	var appController = function($rootScope,$scope,AppService) {   
		
		$scope.app = AppService;
  		
  		initController();

        function initController() { 
        	if($rootScope.globals.currentUser){
        		$scope.app.setCurrentUser();
        	}
        }

    }
    
    appController.$inject = ['$rootScope','$scope','AppService'];
    app.controller('appController', appController); 

});