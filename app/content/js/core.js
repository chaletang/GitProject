define(['photo','chat','calendar'],function(){
	var core = angular.module('app.core', ['core.photo','core.chat','core.calendar']); 
	return core;  
});