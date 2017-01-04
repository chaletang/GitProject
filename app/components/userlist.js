define(['components'],function(components){
	var userlist = function(){
		return {
			templateUrl: '../../../includes/userlist.html'
		};
	}
	userlist.$inject = [];
	components.directive('userlist',userlist);
});
