exports.config = {
    framework: 'mocha',

    // The address of a running selenium server. If this is specified,
    // seleniumServerJar and seleniumPort will be ignored.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:8000',

    specs: [
        './stories/*.js'
    ],

    onPrepare: function () {
        expect = require('chai').use(require('chai-as-promised')).expect;
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    mochaOpts: {
        enableTimeouts: false,
        reporter: 'spec',
        slow: 3000,
        ui: 'bdd'
    }
};
