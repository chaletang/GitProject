define(['angularChat'], function () {
	var CHAT_CONFIG = angular.module('chat').constant('config', {
		  rltm: {
		        service: "pubnub",
		        config: {
		            publishKey: 'pub-c-56597f6c-0ebd-4553-9984-88d2e02fa2aa',
          			subscribeKey: 'sub-c-6accac3a-dc77-11e6-9211-02ee2ddab7fe'
		        }
		    }
		  });
  	return CHAT_CONFIG;
});