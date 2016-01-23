angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [
        {
            "code": "ticket",
            "name": "Tech talks happening now!!! Go and join!",
            "time": "1:29 PM",
            "location": "Food Area"
        }]
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
