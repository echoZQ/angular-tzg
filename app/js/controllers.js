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

/**
 * 偷袭及战绩历史
 */
tzgControllers.controller('HistoryListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.rankListShowFlag = true;
    $scope.changeRank = function (str) {
        var arr = ['btn-battle', 'btn-attack'],
            index = 0,
            length = arr.length - 1,
            target,
            el;

        for (var i = 0; i <= length; i++) {
            if (arr[i].indexOf(str) > 0) {
                index = i;
                break;
            }
        }

        $scope.rankListShowFlag = index == 0 ? true : false;
        target = document.querySelector("." + arr[index]);
        if (target.className.indexOf("chosed") > 0) {
            return;
        } else {
            target.className += " chosed";
            el = document.querySelector("." + arr[length - index]);
            el.className = el.className.replace(/ chosed/, "");
        }

    };

    //获取历史记录
    $http.get('../app/json/historyList.json').
        success(function (data, status) {
            if (status == 200) {
                $scope.attackList = data.attackList;
                $scope.battleList = data.battleList;
            }
        }
    );

    //获取pk结果
    $http.get('../app/json/historyList.json').
        success(function (data, status) {
            if (status == 200) {
                $scope.attackList = data.attackList;
                $scope.battleList = data.battleList;
            }
        }
    );
}]);

/**
 * pk结果
 */
tzgControllers.controller("PkResultCtrl", ['$scope', '$http', function($scope, $http) {
    $http.get('../app/json/pkResult.json').
        success(function (data, status) {
            if (status == 200) {
                $scope.win = data.win;
                $scope.flow = data.flow;
                $scope.fromUser = data.fromUser;
                $scope.targetUser = data.targetUser;
            }
        }
    );
}]);
