angular.module('meanExchange', [

])

.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
            templateUrl: 'index.html',
            controller: 'indexController'
    	});

});
