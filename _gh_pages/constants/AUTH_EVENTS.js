define(['constants'], function (appConstants) {
	var AUTH_EVENTS = appConstants.constant('AUTH_EVENTS', {
		  loginSuccess: 'auth-login-success',
		  loginFailed: 'auth-login-failed',
		  logoutSuccess: 'auth-logout-success',
		  sessionTimeout: 'auth-session-timeout',
		  notAuthenticated: 'auth-not-authenticated',
		  notAuthorized: 'auth-not-authorized'});
  	return AUTH_EVENTS;
});