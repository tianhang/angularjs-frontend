/**
    this kind of setup is so when we minify, names don't get munged
    as long as the page doesn't require any logic of its own
    (and inherits everything from the page's controller)
    then this controller will probably stay empty.
**/

meanExchange.controller('exampleComponentController', ['$scope',
    function exampleComponentController($scope ) {

};
