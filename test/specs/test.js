var assert = require('chai').assert

describe('ask.com request', function() {
    it('should land on the ask.com home page', function () {
      // start the browser and navigate to the ask.com homepage
        browser.url('http://ask.com');
        var title = browser.getTitle();
        assert.equal(title, "Ask.com - What's Your Question?");
    });
    it('should fill in the search box', function(){
      // find the search field, and set the value to equal 'testing'
      var element = browser.element('#search-box');
      element.setValue('testing');
      // verify falue of field
      var fieldValue = element.getAttribute('value');
      assert.equal(fieldValue, 'testing');
    });
    it('should submit the search and render new page', function(){
      // submit the form and ensure browser does not devieate
      browser.click('.sb-button');
      var title = browser.getTitle();
      assert.equal(title, "Ask.com - What's Your Question?");
    });
    it('should have the first definition displayed', function(){
      // wait for the query to be loaded, wait for 5 seconds in total if not
      browser.waitForExist('.sa_dictionary_definition', 5000);
      // pull all definitions, then select the first definition in the list
      var allDefinitions = browser.getText('.sa_dictionary_definition');
      var firstDefinition = allDefinitions[0];
      assert.equal(firstDefinition, "the means by which the presence, quality, or genuineness of anything is determined; a means of trial.");
    });
});
