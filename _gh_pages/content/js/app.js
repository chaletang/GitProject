define(['angularRoute','angularCookies','RouteResolver','directives','constants'],function(){
	var app = angular.module('webapp', [
        'ngRoute','ngCookies','routeResolverModule','app.directives','app.constants'
    ]);
    
	return app;   
});