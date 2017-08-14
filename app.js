angular.module('myApp',[]).controller('myCtrl', function ($scope, $http){
	$http.get("js/data1.json").then(function (data) {
	    $scope.data = data.data;
	    $scope.array = [];
	    for (var key in $scope.data.calls) {
		   if ($scope.data.calls.hasOwnProperty(key)) {
		   	  $scope.array.push(key)
		   }
		}
    });           
})