define(['app'], function (app) {
	var USER_ROLES = app.constant('USER_ROLES', {
		  admin: 'admin',
		  editor: 'editor',
		  guest: 'guest'});
  	return USER_ROLES;
});