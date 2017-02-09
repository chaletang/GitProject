define(['chat'],function(chatModule){

	var chatBox = function(){
 		return {
	      restrict: 'AE',
	      transclude: true,
	      scope: {},
	      controller: ['Messages','$scope', function chatBoxController(Messages,$scope) { 
  		 		// Message Inbox
			    $scope.messages = [];
			    // Receive Messages
			    Messages.receive(function(message) {
			        $scope.messages.push(message);
			    });
			    // Send Messages
			    $scope.send = function() {
			        Messages.send({ 
			            data: $scope.textbox 
			        });
			    };
	      }],
	      link: function(scope, element, attrs){

	      },
	      templateUrl: '../../../includes/chatBox.html'
	    };
	};
	chatModule.directive('chatBox',chatBox); 
	
	
});
