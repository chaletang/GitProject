define(['directives'],function(appDirectives){

	var messageForm = function(){
 		return {
		    restrict: "E",
		    replace: true,
		    templateUrl: '../../../includes/messageForm.html',
		    scope: {},
		    
		    controller: function($scope, currentUser, MessageService){
		
		      $scope.uuid = currentUser;
		      $scope.messageContent = '';
		
		      $scope.sendMessage = function(){
		      	MessageService.sendMessage($scope.messageContent); 
		      	$scope.messageContent = '';
		      }
		    }
		  };
	};
	appDirectives.directive('messageForm',messageForm); 
	
	
});
