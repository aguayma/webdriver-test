var assert = require('chai').assert

describe('ask.com request', function() {
    it('should land on the ask.com home page', function () {
        browser.url('http://ask.com');
        var title = browser.getTitle();
        assert.equal(title, "Ask.com - What's Your Question?");
    });
    it('should fill in the search box', function(){
      var element = browser.element('#search-box');
      element.setValue('testing');
      var fieldValue = element.getAttribute('value');
      assert.equal(fieldValue, 'testing');
    });
    it('should submit the search and render new page', function(){
      browser.click('.sb-button');
      var title = browser.getTitle();
      assert.equal(title, "Ask.com - What's Your Question?");
    });
    it('should have the first definition displayed', function(){
      browser.waitForExist('.sa_dictionary_definition');
      var allDefinitions = browser.getText('.sa_dictionary_definition');
      var firstDefinition = allDefinitions[0];
      assert.equal(firstDefinition, "the means by which the presence, quality, or genuineness of anything is determined; a means of trial.");
    });
});
