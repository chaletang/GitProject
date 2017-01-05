define(['require','app'],function(require,app) {
    'use strict';
	var dashboardController = function(AppService) {

		var that = this;
		that.data = AppService;

        initController();

        function initController() { 
            that.data.setCurrentUser();
            that.data.loadAllUsers();
        }
	}

	dashboardController.$inject = ['AppService'];
	app.register.controller('dashboardController', dashboardController);
});