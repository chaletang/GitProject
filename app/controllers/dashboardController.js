define(['require','app'],function(require,app) {
    'use strict';
	var dashboardController = function(AppService) {

		var that = this;
		that.data = AppService;

        initController();

        function initController() { 
            that.data.setCurrentUser();
        }
	}

	dashboardController.$inject = ['AppService'];
	app.register.controller('dashboardController', dashboardController);
});