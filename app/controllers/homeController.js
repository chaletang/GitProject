define(['app'],function(app) {
    'use strict';
	var homeController = function(AppService, USER_ROLES) {
		var that = this;
		that.data = AppService;

        initController();

        function initController() { 
            that.data.setCurrentUser();
            that.data.loadAllUsers();
        }

    }
    
    homeController.$inject = ['AppService', 'USER_ROLES'];
    app.register.controller('homeController', homeController);

});