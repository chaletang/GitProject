define(['angularResource','angularRoute','pubnubAngular','ngNotify','angularCookies','angularAnimate','RouteResolver','directives','filters','constants','core'],function(){
	var app = angular.module('webapp', [
        'ngResource','ngRoute','pubnub.angular.service', 'ngNotify','ngCookies','ngAnimate','routeResolverModule','app.directives','app.filters','app.constants','app.core'
    ]);
	return app; 
});