define(['require',
'stxPL',

'app',
'directives',
'core',
'router',

'appController',

'sideBar',
'topNav',
'notify',
'myBox',
'myTabs',
'myPane',
'tasks',
'photoList',

'messageForm',
'messageItem',
'messageList',
'userAvatar',

'AuthService',
'UserService',
'FlashService',
'AppService',
'TaskStorage',
'PhotoService',

'CurrentUser',
'MessageService',

'AUTH_EVENTS',
'USER_ROLES'],function(require){
	'use strict';
	 require(['domReady!'], function (document) {
  		angular.bootstrap(document, ['webapp']); 
  	});
});

/*require(['require',
'stxPL',
'pubnub',
'pubnubAngular',
'app',
'directives',
'router',

'appController',

'sideBar',
'topNav',
'notify',
'myBox',
'myTabs',
'myPane',
'tasks',
'messageForm',
'messageItem',
'messageList',

'AuthService',
'UserService',
'FlashService',
'AppService',
'TaskStorage',

'AUTH_EVENTS',
'USER_ROLES'],function(){
	'use strict';
	 require(['domReady!'], function (document) {
  		angular.bootstrap(document, ['webapp']); 
  	});
});*/
