define(['app','lodash'], function (app,_) {
	var currentUser = app.value('currentUser', _.random(1000000).toString());
  	return currentUser;
});