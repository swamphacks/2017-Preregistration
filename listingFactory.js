angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [

      {
          "code": "fort-awesome",
          "name": "Teams are limited to five people",
          "time": "1:56 PM",
          "location": "If you have more, you cannot submit!"
      },
      {
          "code": "users",
          "name": "Team-building at registration desk!",
          "time": "1:46 PM",
          "location": "Don't hack alone!!"
      },
        {
            "code": "ticket",
            "name": "Tech talks happening now!!! Go and join!",
            "time": "1:29 PM",
            "location": "Visualization Room"
        },
        {
            "code": "info",
            "name": "Find the opening ceremony slides here!",
            "time": "12:46 PM",
            "location": "https://goo.gl/8Rjfrr"
        }

      ]
    };

    return listings.entries;
});


angular.module('calendar').factory('Calendar', function() {


var $http = angular.injector(['ng']).get('$http');


return $http({
  method: 'GET',
  url: 'https://www.googleapis.com/calendar/v3/calendars/info@swamphacks.com/events?singleEvents=true&orderBy=startTime&key=AIzaSyCRFCQo-OD_Aj78svAKeFjrV98h2dkQGxU'
})


});
