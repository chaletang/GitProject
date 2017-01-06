define(['jquery','app'], function ($,app) { 

	angular.module('routeResolverModule').setupRegister(app); 
			
   	app.config(['$routeProvider', 'routeResolverProvider', 'USER_ROLES',
   	function($routeProvider, routeResolverProvider, USER_ROLES){
   		routeResolverProvider.routeConfig.setBaseDirectories('./views/', './controllers/','./components/');
		var route = routeResolverProvider.route;
		$routeProvider
			.when('/register', route.resolve('register')) 
			.when('/login', route.resolve('login'))
			.when('/home', route.resolve('home'))
			.when('/dashboard', route.resolve('dashboard','',[USER_ROLES.admin,USER_ROLES.editor]))
			.otherwise({redirectTo: '/login'});
	}]);
	app.run(['$rootScope', '$location', '$cookies', '$http', 'AUTH_EVENTS', 'AuthService',function($rootScope, $location, $cookies, $http, AUTH_EVENTS, AuthService){
		// keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            /*if (restrictedPage && !loggedIn) { 
                $location.path('/login');
            }*/
           	//var currentPath = current.$$route.originalPath;
            var authorizedRoles = next.data.authorizedRoles;
		    if (!AuthService.isAuthorized(authorizedRoles)) {
      			//event.preventDefault();
		      	if (AuthService.isAuthenticated()) {
		        // user is not allowed
		        	$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
		      	} else {
		        // user is not logged in
		        	$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
		        	$location.path('/login');
		        	
		      	}
		    }
        });
	}]);
	return app;
});