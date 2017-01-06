define(['require',
'stxPL',
'app',
'router',
'appController',
'topNav',
'sideBar',
'AuthService',
'UserService',
'FlashService',
'AppService',
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
