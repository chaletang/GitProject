define(['app'],function(app){
	var loginController = function($rootScope, $location, AUTH_EVENTS, USER_ROLES, AuthService, FlashService){
		var that = this;
		that.roles = USER_ROLES;
		that.login = login;
		(function initController(){
			AuthService.clearCredentials(); 
		})();
		function login(){
			that.dataLoading = true;
			AuthService.login(that.username, that.password, function(response){
				if(response.success){
					$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);	
					AuthService.setCredentials(that.username,that.password,response.currentUser.role);
					$location.path('/home');
				}else {
					$rootScope.$broadcast(AUTH_EVENTS.loginFailed); 
					FlashService.Error(response.message);   
					that.dataLoading = false;
				}
			});
		}
	}
	loginController.$inject = ['$rootScope','$location','AUTH_EVENTS','USER_ROLES','AuthService','FlashService'];
	//app.controller('loginController', loginController);
	app.register.controller('loginController', loginController); 
});
