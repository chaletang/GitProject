define(['angularRoute','angularCookies','angularAnimate','RouteResolver','directives','constants'],function(){
	var app = angular.module('webapp', [
        'ngRoute','ngCookies','ngAnimate','routeResolverModule','app.directives','app.constants'
    ]);
    
	return app;   
});