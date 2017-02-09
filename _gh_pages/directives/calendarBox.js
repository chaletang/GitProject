define(['calendar'],function(calendarModule){

	var calendarBoxController = function(){
		
	}
	calendarBoxController.$inject = [];
	calendarModule.controller('calendarBoxController',calendarBoxController);
	
	var calendarBox = function(){
 		return {
		    restrict: "E",
		    template: "<div class='calendar-container'></div>",
		    controller: calendarBoxController,
		    link:function(scope, element, attrs) {
	    		require(['fullCalendar'],function(){
	    			//Refer to api doc:https://fullcalendar.io/
					$('.calendar-container').fullCalendar({});
	    		})
		    }
		  };
	};
	calendarModule.directive('calendarBox',calendarBox); 
	
});
