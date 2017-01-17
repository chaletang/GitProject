define(['directives'],function(appDirectives){

	var tasks = function(){
 		return {
	      restrict: 'E',
	      transclude: true,
	      scope: {title: '@', bgcolor:'@'},
	      controller: ['$rootScope', '$scope', '$location', 'TaskStorage', 'filterFilter','$http', function TasksController($rootScope,$scope, $location, TaskStorage, filterFilter, $http) {	      		
	      		var dataUrl = "../../content/js/data/";	
	      					    
	      		var tasks = $scope.tasks;
	      		$scope.newTask = '';
				$scope.editedTask = null;
				$scope.currentUser = $rootScope.globals.currentUser.username;
				$scope.statusFilter ={ user: $scope.currentUser};
				$scope.status ='all';
				
				if(TaskStorage.get().length == 0) {
					$http.get(dataUrl + "tasks.json").success(
	      			function(response) {
	      				tasks =$scope.tasks = response.tasks;
					});
				}
				else {
					tasks = $scope.tasks = TaskStorage.get();
				}
				

  				$scope.switchTask = function(status){
  					$scope.status = status;
  					if(status == "undo") {
  						$scope.statusFilter ={ user: $scope.currentUser, completed: false };
  					}else if (status == "done")	{
  						$scope.statusFilter ={ user: $scope.currentUser, completed: true };
  					}else {
  						$scope.statusFilter ={ user: $scope.currentUser};
  					}
  				}

				//$scope.watchTodo = function(){
					$scope.$watch('tasks', function () {
						if(!!tasks){
							$scope.allCount = filterFilter(tasks, {user: $scope.currentUser}).length;
							$scope.remainingCount = filterFilter(tasks, {user: $scope.currentUser,completed: false }).length;
							$scope.doneCount = $scope.allCount - $scope.remainingCount;
							$scope.allChecked = !$scope.remainingCount;
						}
					}, true);
				//};
				
				$scope.saveTask = function () {
					/*$http.post('http://localhost:9001/content/js/data/tasks.json', todos).success(function(){
			            $scope.msg = 'Data saved';
			        }).error(function(data) {
			            alert("failure message:" + JSON.stringify({data:data}));
			        });*/
			       TaskStorage.put(tasks);
			       alert("Data saved to localstorage!");
				};
				
				$scope.addTask = function () {
					var newTask = $scope.newTask.trim();

					if (!newTask.length) {
						return;
					}
	
					tasks.push({
						title: newTask,
						completed: false,
						user: $scope.currentUser
						
					});
					$scope.needSave = true;
	
					$scope.newTodo = '';
				};
	
	
				$scope.editTask = function (task) {
					$scope.editedTask = task;
					// Clone the original task to restore it on demand.
					$scope.originalTask = angular.copy(task);
					$scope.editing = true;;
				};
	
	
				$scope.doneEditing = function (task) {
					$scope.editedTask = null;
					task.title = task.title.trim();
	
					if (!task.title) {
						$scope.removeTask(task);
					}
					$scope.needSave = true;
					$scope.editing = false;
				};
	
				$scope.revertEditing = function (task) {
					tasks[tasks.indexOf(task)] = $scope.originalTask;
					$scope.doneEditing($scope.originalTask);
				};
	
				$scope.removeTask = function (task) {
					tasks.splice(tasks.indexOf(task), 1);
				};
	
	
				$scope.clearDoneTasks = function () {
					$scope.tasks = tasks = tasks.filter(function (val) {
						return !val.completed;
					});
				};
	
	
				$scope.markAll = function (done) {
					tasks.forEach(function (task) {
						task.completed = done;
						
					});
				};
	      }],
	      link: function(scope, element, attrs){
				scope.$watch(attrs.taskFocus, function (newval) {
					if (newval) {
						$timeout(function () {
							element[0].focus();
						}, 0, false);
					}
				});
	      },
	      templateUrl: '../../../includes/tasks.html'
	    };
	};
	appDirectives.directive('tasks',tasks);  
	
	
});
