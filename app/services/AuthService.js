define(['app'],function(app) {
	var AuthService = function($http, $cookies, $rootScope, $timeout, UserService){
		var service = {};
		service.login = login;
		service.setCredentials = setCredentials;
		service.clearCredentials = clearCredentials;
		service.isAuthenticated = isAuthenticated;
		service.isAuthorized = isAuthorized;
		return service;
		
		function isAuthenticated() {
		    return !!$rootScope.globals.currentUser.username;
  		};

  		function isAuthorized(authorizedRoles) {
    		if (!angular.isArray(authorizedRoles)) {
      			authorizedRoles = [authorizedRoles];
    		}
    		return (service.isAuthenticated() &&
      		authorizedRoles.indexOf($rootScope.globals.currentUser.role) !== -1);
  		};
		
		function login(username, password, callback){
			$timeout(function() {
				var response;
				UserService.getByUserName(username).then(function(user){
					if(user != null && user.password == password) {
						response = {success: true, currentUser: {role:user.role}};
					}else {
						response = {success: false, message: 'UserName or Password is incorrect'};
					}
					callback(response);
				});
			}, 1000);
		}
		
		function setCredentials(username, password, role) {
			var authdata = username + ':' + password;
			$rootScope.globals = {
				currentUser: {
					username: username,
					data: authdata,
					role: role
				}
			};
			$http.defaults.headers.common['Authorization'] = 'Basic' + authdata;
			var cookieExp = new Date();
			cookieExp.setDate(cookieExp.getDate() + 7);
			$cookies.putObject('globals', $rootScope.globals, {expires: cookieExp}); 
		}
		
		function clearCredentials(){
			$rootScope.globals = {};
			$cookies.remove('globals');
			$http.defaults.headers.common.Authorization = 'Basic';
		}
	}
	AuthService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UserService'];
	app.factory('AuthService',AuthService); 
});
