define(['angularResource','angularRoute','pubnubAngular','ngNotify','angularCookies','angularAnimate','RouteResolver','directives','constants','core'],function(){
	var app = angular.module('webapp', [
        'ngResource','ngRoute','pubnub.angular.service', 'ngNotify','ngCookies','ngAnimate','routeResolverModule','app.directives','app.constants','app.core'
    ]);
	return app; 
});