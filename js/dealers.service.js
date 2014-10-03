
angular.module('myApp').factory('dealersService', dealersService);

function dealersService() {

    var service = {
        dealers: getDealers,
        dealerCountries: getDealerCountries
    }
    return service;

    // ---------------------------------------------------------

    function getDealers() {
        return [
            { name: "Jørgen", country: "DK" },
            { name: "Göran", country: "SE" },
            { name: "Jürgen", country: "SE" }
        ];
    }

    function getDealerCountries() {
        return ["DK", "SE", "DE"];
    }
}