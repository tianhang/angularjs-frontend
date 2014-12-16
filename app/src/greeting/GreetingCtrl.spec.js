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

    it("should call callback with correct greeting (sinon-chai)", function () {
        var cb = sinon.spy();

        function hello (name, fn) {
            fn('hello ' + name);
        }

        hello("foo", cb);

        expect(cb).to.have.been.calledWith('hello foo');
    });
});
