/**
    if you're hitting an endpoint in this actual controller (but are inheriting the data from the page),
    then you wouldn't need the $http call in here. But I added just to demonstrate multiple injections.
**/

meanExchange.controller('forExampleController', ['$scope', '$http',
    function forExampleController($scope, $http ) {

        $scope.add = 'something something';

    }
]);
