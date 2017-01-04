require.config({
	paths: {
		'app': 'app',
		'components': 'components',
		'bootstrap': 'bootstrap',
		'router': 'router',
		
		'AUTH_EVENTS': '../../constants/AUTH_EVENTS',
		'USER_ROLES': '../../constants/USER_ROLES',
		
		'angular': '../../bower_components/angular/angular',
		'angularMocks': '../../bower_components/angular-mocks/angular-mocks',
		'angularRoute': '../../bower_components/angular-route/angular-route',
		'angularCookies': '../../bower_components/angular-cookies/angular-cookies',
		
		'jquery': 'libs/jquery/jquery',
		'underscore': 'libs/underscore/underscore',
		'text': 'libs/requirejs-text/text',
		'domReady': 'libs/requirejs-domReady/domReady',
		
		'RouteResolver': '../../services/RouteResolver',
		'AuthService': '../../services/AuthService',
		'FlashService': '../../services/FlashService',
		'UserService': '../../services/UserService',
		'AppService': '../../services/AppService',
		
		'userlist':'../../components/userlist'
		
		
	},
	shim: {
		underscore: {
			exports: '_'
		},
		angular: {
			exports: 'angular'
		},
		angularRoute :{
			deps: ['angular']
		},
		angularMocks :{
			deps: ['angular']
		},
		angularCookies :{
			deps: ['angular']
		}
	},
	deps: ['bootstrap']
});
