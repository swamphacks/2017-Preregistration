angular.module('calendar', []);
angular.module('listings', []);


angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      coordinates: {}
    };


    $scope.addListing = function() {


           var newListingToInsert = {
             name: $scope.newListing.name,
             code: $scope.newListing.code,
             address: $scope.newListing.address,
             coordinates: {
               latitude: $scope.newListing.coordinates.latitude,
               longitude: $scope.newListing.coordinates.longitude
             }
           }
           $scope.listings.push(newListingToInsert);
           clearForm();
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.detailedInfo.showDetails = true
    };
  }
]);

angular.module('calendar').controller('CalendarController', ['$scope', 'Calendar',

  function($scope, Calendar) {
    Calendar.then(function successCallback(response){
    
    //console.log($scope.listings[0].start.dateTime)
    $scope.calendar = response.data.items
    
    console.log($scope.calendar)
    
    if ($scope.calendar[0].start.dateTime.length == 25) {

      for (var index = 0; index < $scope.calendar.length; ++index) {
      //console.log($scope.listings[index].start.dateTime)
      var start = fixTime($scope.calendar[index].start.dateTime)
      console.log(start)
      var end = fixTime($scope.calendar[index].end.dateTime)
      $scope.calendar[index].start.dateTime = start
      $scope.calendar[index].end.dateTime = end
      
    }
    $scope.$apply()
    }
    
    
} , 
function errorCallback(response) {
    console.log("error")
  })
    

  }
]);