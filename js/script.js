var myApp = angular.module('app', []);
// Need to include angular-animate.js script in order for ngAnimate module dependence below to be met
//var myApp = angular.module('app', ['ngAnimate']);

myApp.controller('mainCtrl', function ($scope){
	$scope.openForm = false;
	//console.log(1);
});
