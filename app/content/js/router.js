define(['jquery','app','directives','photo'], function ($,app,appDirectives,photo) { 
	 
	angular.module('routeResolverModule').setupRegister(app); 
			
   	app.config(['$routeProvider', 'routeResolverProvider', 'USER_ROLES',
   	function($routeProvider, routeResolverProvider, USER_ROLES){
   		routeResolverProvider.routeConfig.setBaseDirectories('./views/', './controllers/','./directives/');
		var route = routeResolverProvider.route;
		$routeProvider
			.when('/register', route.resolve('register')) 
			.when('/login', route.resolve('login'))
			.when('/home', route.resolve('home'))
			.when('/dashboard', route.resolve('dashboard','',true,[USER_ROLES.admin,USER_ROLES.editor]))
			.when('/photoList', route.resolve('photoList','',false))
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

           	//var currentPath = current.$$route.originalPath;
            var authorizedRoles = next.data.authorizedRoles;
            if(restrictedPage){
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
            }
		    
        });
	}]);
    app.run(['Pubnub','currentUser', function(Pubnub, currentUser) {
    Pubnub.init({
          publish_key: 'pub-c-56597f6c-0ebd-4553-9984-88d2e02fa2aa',
          subscribe_key: 'sub-c-6accac3a-dc77-11e6-9211-02ee2ddab7fe',
          uuid: currentUser,
          origin: 'pubsub.pubnub.com',
          ssl: true
      });
  	}]);
  	app.run(['ngNotify', function(ngNotify) {
      ngNotify.config({
          theme: 'paster',
          position: 'top', 
          duration: 250
      });
  	}]);
	return app;
});