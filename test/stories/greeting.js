describe('Greeting page', function () {

    before(function () {
        browser.get('');
    });

    it('should display a greeting', function () {
        expect($('p').getText()).to.eventually.equal('Hello, world!');
    });

});
