'use strict';
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {

    onPrepare: function () {
        browser.manage().timeouts().setScriptTimeout(980000);
        global.internetExplorer = true;

        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true
                }
            })
        );
    },

    capabilities: {
        'browserName': 'internet explorer',
        'ignoreProtectedModeSettings': true,
        'platform': 'ANY',
        'version': '11',
        args: ['--silent', '--no-sandbox', '--test-type=browser', '--lang=US', '--start-maximized'], //,'--headless', '--disable-gpu'
        prefs: {
            'download': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'extensions_to_open': '',
                'default_directory': process.cwd() + '/downloads/'
            },
        }
    },
    localSeleniumStandaloneOpts: {
        jvmArgs: [
            '-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.14.0.exe'
        ]
    },
    //config for browserStack.
    directConnect: false,
    framework: 'jasmine',
    // seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer.exe'],
    seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.14.0.exe'],

    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumAddress:  'http://hub-cloud.browserstack.com/wd/hub',
    suites: {
        sandbox: [
            '../**/sandbox10.js'
        ],
    },
    specs: [

        '../**/sandbox10.js' //financial w/IE

    ],

// Options to be passed to Jasmine-node.
    keepAlive: false,
    useAllAngular2AppRoots: true,
    getPageTimeout: 950000,//190000
    DEFAULT_TIMEOUT_INTERVAL: 950000,
    defaultTimeoutInterval: 950000,
    allScriptsTimeout: 950000,
    jasmineNodeOpts: {
        keepAlive: false,
        isVerbose: true,
        showColors: false,
        includeStackTrace: true,
        defaultTimeoutInterval: 950000,
        print: function () {
        }
    }
};
