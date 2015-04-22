'use strict';

var tzgApp = angular.module("tzgApp", [
	'ngRoute',
    'tzgControllers'
]);

tzgApp.config(['$routeProvider', 
	function ($routeProvider) {
        $routeProvider.
			when("/", {
				templateUrl: "partials/enter.html",
                controller: ""
			}).
			when("/enter", {
				templateUrl: 'partials/enter.html',
                controller: ""
			}).
            when("/battleTzg", {
                templateUrl: 'partials/battleTzg.html',
                controller: "BattleTzgCtrl"
            }).
            when("/battleResult", {
                templateUrl: 'partials/battleResult.html',
                controller: "BattleTzgCtrl"
            })
}]);

