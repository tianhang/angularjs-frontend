[![Stories in Ready](https://badge.waffle.io/austin-pair-programming/the-mean-exchange.png?label=ready&title=Ready)](https://waffle.io/austin-pair-programming/the-mean-exchange)
the-mean-exchange
=================

Where MEANies get JOBSies :)

App that sets up training paths and tests based on MEAN stack (full stack JavaScript) jobs
entered and approved by recruiters and hiring managers.


Getting Started
===============

* `git clone https://github.com/austin-pair-programming/the-mean-exchange.git`
* `cd the-mean-exchange`
* `npm install`
* `bower install`
* `npm install -g gulp`
* `gulp server`
* navigate to `http://localhost:8000`

Cloud 9
-------

For those using the Cloud 9 IDE:
instead of navigating to `http://localhost:8000` to view the application,
click Preview (in the top menu bar next to Run) then Preview with Web Server.
You should see a mock browser running in your IDE with the application loaded.
The url shown in the address bar is public, so you can open it in another tab
or share it with your friends!

Testing
=======

Unit
----

If you do not have Test'em installed yet, run
`npm install testem -g`

Execute the tests using 
`testem`
and navigating to `http://localhost:7357/` (as prompted by the console output).

If you are using the c9.io IDE, you need to specify the host and port 
`testem --host $IP -p $IP`

End-to-end
----------

You must install the selenium server before running end-to-end tests via protractor. 
`./node_modules/.bin/webdriver-manager update`

To run the tests 
`./node_modules/.bin/protractor test/protractor.conf.js`

Note: you must have a development server (`gulp server`) running at the same time for the e2e tests to work.
