define(['app'],function(app) {
    'use strict';
	var homeController = function(AppService) {
		var that = this;
		that.data = AppService;

        initController();

        function initController() { 
            that.data.setCurrentUser();
        }

    }
    
    homeController.$inject = ['AppService'];
    app.register.controller('homeController', homeController);

});