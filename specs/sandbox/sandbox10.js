'use strict';
const {panel} = require("../../constants/index");
const {Utils} = require('../../modules/index');

describe('Internet Explorer Demo -- github', function () {
    afterEach(function () {
        // Utils.testBrowserLogs();
    });

    it('should load successfully', function () {
        Utils.enableIgnoreSync();
        browser.get(panel.webPage);
        expect(browser.getCurrentUrl()).toBe(panel.webPage);
    });
    it('should find the internet Explorer repo on github', function () {
      let searchBar = $(panel.searchBtn);
      Utils.smartWait(1, searchBar);
      searchBar.sendKeys(panel.repoName);
      searchBar.sendKeys(protractor.Key.ENTER);
    });
    it('should browse to the repository', function () {
        let repoLink = $$(panel.alignLink).last();
        Utils.smartWait(1, repoLink, true);
        repoLink.click();
        Utils.smartWait(5000);
    });


});
