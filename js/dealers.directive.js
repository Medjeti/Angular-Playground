
angular.module('myApp', []).directive('dealers', ['dealersService', dealerDirective]);

function dealerDirective(dealersService) {
    var directive = {
        link: link,
        templateUrl: '/template/dealer.html',
        restrict: 'E'
    };
    return directive;

    // ---------------------------------------------------------

    function link(scope, element, attrs) {
        //scope.dealers = dealersService.getDealers(callback);
        dealersService.getDealers(callback);

        function callback(data) {
            //scope.dealers = data;
            alert("Så' der callback!");
        }
    }
};