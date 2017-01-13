define([
	'app'
], function (app) {
	var TaskStorage = function(){
		var STORAGE_ID = 'tasks';
		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (todos) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			}
		};
	}
	app.factory('TaskStorage', TaskStorage);
});