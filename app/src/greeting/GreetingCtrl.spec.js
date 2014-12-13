describe('GreetingCtrl', function () {
    var $scope;

    beforeEach(function () {
        module('meanExchange');
        inject(function ($controller) {
            $scope = {}
            $controller('GreetingCtrl', {
                $scope: $scope
            });
        });
    });

    it('should set the greeting property on the scope', function () {
        expect($scope.greeting).to.equal('Hello, world!');
    });
});
