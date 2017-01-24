require.config({
	paths: {
		'app': 'app',
		'bootstrap': 'bootstrap',
		'router': 'router',
		'constants': 'constants',
		'directives': 'directives',
		'filters': 'filters',
		'core': 'core',
		'photo': 'core.photo',
		
		'AUTH_EVENTS': '../../constants/AUTH_EVENTS',
		'USER_ROLES': '../../constants/USER_ROLES',
		
		'angular': '../../bower_components/angular/angular',
		'angularMocks': '../../bower_components/angular-mocks/angular-mocks',
		'angularRoute': '../../bower_components/angular-route/angular-route',
		'angularAnimate': '../../bower_components/angular-animate/angular-animate',
		'angularCookies': '../../bower_components/angular-cookies/angular-cookies',
		'angularResource': '../../bower_components/angular-resource/angular-resource',
		'angularChat': '../../bower_components/angular-chat/angular-chat',
		'rltm': '../../bower_components/rltm/web/rltm',
		'materialize': '../../bower_components/materialize/dist/js/materialize',
		'lodash': '../../bower_components/lodash/dist/lodash',
		'ngNotify': '../../bower_components/ng-notify/dist/ng-notify.min',
		'pubnub': '../../bower_components/pubnub/dist/web/pubnub',
		'pubnubAngular': '../../bower_components/pubnub-angular/dist/pubnub-angular',
		
		'jquery': 'libs/jquery/jquery',
		'domReady': 'libs/requirejs-domReady/domReady',
		'stxPL': 'libs/stx-pattern-library',
		
		'RouteResolver': '../../services/RouteResolver',
		'AuthService': '../../services/AuthService',
		'FlashService': '../../services/FlashService',
		'UserService': '../../services/UserService',
		'AppService': '../../services/AppService',
		'TaskStorage':'../../services/TaskStorage',
		'PhotoService':'../../services/PhotoService',
		'CurrentUser':'../../services/CurrentUser',
		'MessageService':'../../services/MessageService',
		
		'groupByFilter':'../../filters/groupByFilter',
		
		'topNav': '../../directives/topNav',
		'sideBar': '../../directives/sideBar',
		
		'myBox': '../../directives/myBox',
		'myTabs': '../../directives/myTabs',
		'myPane': '../../directives/myPane',
		
		'notify': '../../directives/notify',
		'tasks': '../../directives/tasks',
		'photoList': '../../directives/photoList',
		
		'messageForm': '../../directives/messageForm',
		'messageItem': '../../directives/messageItem',
		'messageList': '../../directives/messageList',
		'userAvatar':'../../directives/userAvatar',
		
		'appController':'../../controllers/appController' ,
		
		'bookBlock':'../../content/js/libs/jquery.bookblock',
		'modernizr':'../../content/js/libs/modernizr.custom'
		
	},
	shim: {
		stxPL:{
			deps: ['jquery']
		},
		bookBlock:{
			deps: ['jquery','modernizr']
		},
		lodash: {
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
		angularAnimate :{
			deps: ['angular']
		},
		angularCookies :{
			deps: ['angular']
		},
		angularResource :{
			deps: ['angular']
		},
		angularChat :{
			deps: ['angular']
		},
		ngNotify :{
			deps: ['angular']
		},
		pubnubAngular :{
			deps: ['angular','pubnub']
		}
	},
	deps: ['bootstrap']
});
