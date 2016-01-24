angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [
      {
            "code": "code",
            "name": "Devpost",
            "time": "10:23 AM",
            "location": "http://swamphacks2016.devpost.com/ "
        },
      {
            "code": "building",
            "name": "NEW SPONSOR TABLE - General Electric",
            "time": "10:15 PM",
            "location": "Go see the GE sponsor table! "
        },
      {
            "code": "gift",
            "name": "NEW PRIZE ANNOUNCEMENT - Nielsen",
            "time": "3:43 PM",
            "location": "Best Measurement Hack - $200 in Amazon gift cards "
        },
       {
            "code": "code-fork",
            "name": "Clarifai API",
            "time": "3:43 PM",
            "location": "https://developer.clarifai.com/signup/swamphacks"
        },
      {
          "code": "user-plus",
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
