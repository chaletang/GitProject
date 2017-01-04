define(['require',
'app',
'components',
'router',
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
