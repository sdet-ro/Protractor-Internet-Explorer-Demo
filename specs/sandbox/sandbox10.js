'use strict';
const {panel} = require("../../constants/index");
const {Utils} = require('../../modules/index');

describe('Internet Explorer Demo -- github', function () {
    afterEach(function () {
        // Utils.testBrowserLogs();
    });

    it('should load successfully', function () {
        Utils.enableIgnoreSync()
        browser.get(panel.webPage);
        expect(browser.getCurrentUrl()).toBe(panel.webPage);
    });
    it('should browse to a repository', function () {
      let searchBar = $('.header-search-input');
      Utils.smartWait(1, searchBar);
      searchBar.sendKeys('Protractor-Internet-Explorer-Demo');
      searchBar.sendKeys(protractor.Key.ENTER);
      Utils.smartWait(5000);
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();

    });




});
