define(['angularRoute','angularCookies','RouteResolver','components'],function(){
	var app = angular.module('webapp', [
        'ngRoute','ngCookies','routeResolverModule','components'
    ]);
    
	return app;   
});