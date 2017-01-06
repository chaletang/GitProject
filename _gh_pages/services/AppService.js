define(['app'],function(app) {
    'use strict';
	var AppService = function(USER_ROLES, AuthService, UserService, $rootScope) {
        var service = {};
       	service.currentUser = null;
       	service.allUsers = [];
       	service.setCurrentUser = setCurrentUser;
       	service.loadAllUsers = loadAllUsers;
        service.deleteUser = deleteUser;
        service.userRoles = USER_ROLES;
        service.isAuthorized = AuthService.isAuthorized;
        service.isAuthenticated = AuthService.isAuthenticated;
        return service;

        function setCurrentUser() {
            UserService.getByUserName($rootScope.globals.currentUser.username)
                .then(function (user) {
                    service.currentUser = user;
                });
     	}
     	function loadAllUsers() {
            UserService.getAll()
                .then(function (users) {
                    service.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.deleteUser(id)
            .then(function () {
                loadAllUsers(); 
            });
        }
    }
    
    AppService.$inject = ['USER_ROLES', 'AuthService', 'UserService', '$rootScope'];
    app.factory('AppService', AppService);
 });