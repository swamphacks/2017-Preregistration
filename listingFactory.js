angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [
        {
            "code": "gamepad",
            "name": "Games happening soon! 1:00pm",

        },
        {
            "code": "child",
            "name": "Take a break and do some yoga",
            "time": "6:00 AM",
            "location": "hack your back so you don't crack"
        },
        {
            "code": "tint",
            "name": "Drink some Soylent!",
            "time": "2:00 AM",
            "location": "have two if you want"
        },
        {
            "code": "users",
            "name": "Find your teammates in the atrium",
            "time": "12:45 PM",
            "location": "come to our team mingle event!"
        },
        {
            "code": "rocket",
            "name": "Hacking Started!",
            "time": "12:00 PM",
            "location": "happy hacking!!!"
        },

        {
            "code": "bars",
            "name": "Grab a sandwich, on us!",
            "time": "11:00 PM",
            "location": "along the brick wall"
        },

        {
            "code": "ticket",
            "name": "Register at the French Fries!",
            "time": "9:30 PM",
            "location": "Giant Yellow Statue"
        }]
    };

    return listings.entries;
});
