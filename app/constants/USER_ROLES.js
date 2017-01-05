define(['constants'], function (appConstants) {
	var USER_ROLES = appConstants.constant('USER_ROLES', {
		  admin: 'admin',
		  editor: 'editor',
		  guest: 'guest'});
  	return USER_ROLES;
});