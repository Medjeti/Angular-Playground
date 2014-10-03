
angular.module('myApp', []).directive('dealers', dealerDirective);

function dealerDirective() {
    var directive = {
        link: link,
        templateUrl: '/template/dealer.html',
        restrict: 'E'
    };
    return directive;

    // ---------------------------------------------------------

    function link(scope, element, attrs) {
        scope.dealers = [];
    }
};