var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope, $http){
  $scope.newEmail = "";
  $scope.clicked = false;
  var signups_list_id = "aa577777f4"
  var signup_url = "https://api.mailchimp.com/3.0/lists/" + signups_list_id + "/members/"
  var signup_url2= "http://swamphacks.us10.list-manage.com/subscribe/post?u=44a52d9dbedc78feec6c91b97&amp;id=aa577777f4"
  var signup_url3 = "http://swamphacks.us10.list-manage.com/subscribe/post-json?u=44a52d9dbedc78feec6c91b97&amp;id=aa577777f4&JSON_CALLBACK=?"


  var singup_object = {
    "email_address": $scope.newEmail, 
    "status": "subscribed", 
    "merge_fields": {
      "FNAME": "Urist", 
      "LNAME": "McVankab"
    }
  };

  $scope.signup = function() {
    console.log("in sinup")
    // Simple POST request example (passing data) :
    $http.jsonp(signup_url3, singup_object).
      then(function(response) {
        console.log(response)
        // this callback will be called asynchronously
        // when the response is available
      }, function(response) {
        console.log(response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };



  console.log(1);


});
