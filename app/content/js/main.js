require.config({
	paths: {
		'app': 'app',
		'bootstrap': 'bootstrap',
		'router': 'router',
		'constants': 'constants',
		'directives': 'directives',
		
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
		'stxPL': 'libs/stx-pattern-library',
		
		'RouteResolver': '../../services/RouteResolver',
		'AuthService': '../../services/AuthService',
		'FlashService': '../../services/FlashService',
		'UserService': '../../services/UserService',
		'AppService': '../../services/AppService',
		'TaskStorage':'../../services/TaskStorage',
		
		'topNav': '../../directives/topNav',
		'sideBar': '../../directives/sideBar',
		'notify': '../../directives/notify',
		'myBox': '../../directives/myBox',
		'myTabs': '../../directives/myTabs',
		'myPane': '../../directives/myPane',
		'tasks': '../../directives/tasks',
		
		'appController':'../../controllers/appController'
		
	},
	shim: {
		underscore: {
			exports: '_'
		},
		stxPL :{
			deps: ['jquery']
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
