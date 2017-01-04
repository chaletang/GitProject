define(['app'], function(app){
    var registerController = function(UserService, USER_ROLES, $location, $rootScope, FlashService) {
        var that = this;
		that.roles = USER_ROLES;
        that.register = register; 

        function register() {
            that.dataLoading = true;
            UserService.createUser(that.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        that.dataLoading = false;
                    }
                });
        }
    }
    
     
	 registerController.$inject = ['UserService', 'USER_ROLES', '$location', '$rootScope', 'FlashService'];
	 app.register.controller('registerController', registerController);

});
