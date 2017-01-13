define(['require',
'stxPL',
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
'AuthService',
'UserService',
'FlashService',
'AppService',
'TaskStorage',
'AUTH_EVENTS',
'USER_ROLES'],function(require){
	'use strict';
	 require(['domReady!'], function (document) {
  		angular.bootstrap(document, ['webapp']); 
  	});
});

/*require(
[
	'app',
	'router',
	'AuthService',
	'UserService',
	'FlashService'
],
function () {
    angular.bootstrap(document, ['webapp']);
});*/
