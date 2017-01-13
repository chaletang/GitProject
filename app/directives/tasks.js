define(['directives'],function(appDirectives){

	var tasks = function(){
 		return {
	      restrict: 'E',
	      transclude: true,
	      scope: {title: '@', bgcolor:'@'},
	      controller: ['$rootScope', '$scope', '$location', 'TaskStorage', 'filterFilter','$http', function TasksController($rootScope,$scope, $location, TaskStorage, filterFilter, $http) {	      		
	      		var dataUrl = "../../content/js/data/";	
	      					    
	      		var todos = $scope.todos;
	      		$scope.newTodo = '';
				$scope.editedTodo = null;
				$scope.currentUser = $rootScope.globals.currentUser.username;
				$scope.statusFilter ={ user: $scope.currentUser, status: 'undo' };
				//$scope.todos = TaskStorage.get();
				
	      		$http.get(dataUrl + "tasks.json").success(
	      			function(response) {
	      				todos =$scope.todos = response.tasks;
	      				$scope.watchTodo();
  				});

				$scope.watchTodo = function(){
					$scope.$watch('todos', function () {
						if(todos){
							$scope.remainingCount = filterFilter(todos, { status: 'Undo' }).length;
							$scope.doingCount = filterFilter(todos, { status: 'Doing' }).length;
							$scope.doneCount = todos.length - $scope.remainingCount - $scope.doingCount;
							$scope.allChecked = !$scope.remainingCount;
							//TaskStorage.put(todos);
						}
					}, true);
				};
				
				$scope.saveTodo = function () {
					$http.post('http://localhost:9001/content/js/data/tasks.json', todos).success(function(){
			            $scope.msg = 'Data saved';
			        }).error(function(data) {
			            alert("failure message:" + JSON.stringify({data:data}));
			        });
				};
				
				$scope.addTodo = function () {
					var newTodo = $scope.newTodo.trim();

					if (!newTodo.length) {
						return;
					}
	
					todos.push({
						title: newTodo,
						status: 'undo',
						user: $scope.currentUser
						
					});
	
					$scope.newTodo = '';
				};
	
	
				$scope.editTodo = function (todo) {
					$scope.editedTodo = todo;
					// Clone the original todo to restore it on demand.
					$scope.originalTodo = angular.copy(todo);
					$scope.editing = true;;
				};
	
	
				$scope.doneEditing = function (todo) {
					$scope.editedTodo = null;
					todo.title = todo.title.trim();
	
					if (!todo.title) {
						$scope.removeTodo(todo);
					}
					$scope.editing = false;
				};
	
				$scope.revertEditing = function (todo) {
					todos[todos.indexOf(todo)] = $scope.originalTodo;
					$scope.doneEditing($scope.originalTodo);
				};
	
				$scope.removeTodo = function (todo) {
					todos.splice(todos.indexOf(todo), 1);
				};
	
	
				$scope.clearDoneTodos = function () {
					$scope.todos = todos = todos.filter(function (val) {
						return !val.completed;
					});
				};
	
	
				$scope.markAll = function (done) {
					todos.forEach(function (todo) {
						todo.completed = done;
					});
				};
	      }],
	      link: function(scope, element, attrs){
				scope.$watch(attrs.todoFocus, function (newval) {
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
