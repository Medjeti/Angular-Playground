
angular.module('myApp').factory('dealersService', ['$http', dealersService]);

function dealersService($http) {

    var service = {
        getDealers: getDealers
    }
    return service;

    // ---------------------------------------------------------

    function getDealers(callback) {
        //return $http.get("/services/dealers.json");

        $http.get("/services/dealers.json").
            success(function (data, status, headers, config) {
                //$scope.data = data;
                callback();
            }).
            error(function (data, status, headers, config) {
                alert("Boooh :(");
                // log error
            });
    }
}