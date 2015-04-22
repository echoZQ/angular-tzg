'use strict';

var tzgControllers = angular.module("tzgControllers", []);

/**
 * 规则的显示和隐藏
 */
tzgControllers.controller('RulesCtrl', ['$scope', function ($scope) {
    $scope.showRulesFlag = false;
    $scope.showRules = function () {
        $scope.showRulesFlag = true;
    };
    $scope.closeRules = function () {
        $scope.showRulesFlag = false;
    };
}]);

/**
 * footer数据填充
 */
tzgControllers.controller('FooterCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('../app/json/userInfo.json').
        success(function (data, status) {
            if (status == 200) {
                $scope.nickname = data.nickname;
                $scope.flow = data.flow;
            }
        });
}]);

/**
 * 与铜猫pk
 */
tzgControllers.controller('BattleTzgCtrl', ['$scope', function($scope) {
    $scope.showPkingFlag = false;
    $scope.showPkPage = function () {
        $scope.showPkingFlag = true;
    };
}]);
