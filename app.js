
	var app=angular.module('first',[]);

	app.controller('mySongs',function($scope, $http) {
		$http.get('http://192.168.0.8:8080/api/frontend/songs')
		.success(function(data) {
            $scope.songs = data;
            
		});
	});

	app.controller('myVideos',function($scope, $http) {
		$http.get('http://192.168.0.8:8080/api/frontend/videos')
		.success(function(data) {
            $scope.videos = data;

      });
	});

	app.controller('myBooks',function($scope, $http) {
		$http.get('http://192.168.0.8:8080/api/frontend/books')
		.success(function(data) {
            $scope.books = data;

      });
	});


