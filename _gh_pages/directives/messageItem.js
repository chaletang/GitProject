define(['directives'],function(appDirectives){

	var messageItem = function(){
 		return {
		    restrict: "E",
		    templateUrl: '../../../includes/messageItem.html',
		    scope: {
		      senderUuid: "@",
		      content: "@",
		      date: "@"
		    }
		  };
	};
	appDirectives.directive('messageItem',messageItem); 
	
	
});
