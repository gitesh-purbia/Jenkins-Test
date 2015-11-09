var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('cheking model', function(){
	it('should print value by reading textbox', function(){
		this.timeout(9000);
		browser.get('http://localhost:3000');
		element(by.model('ctrl.name')).sendKeys('write first protractor test');
		var message = element(by.css('.message'));
		expect(message.getText()).to.eventually.equal('write first protractor test');
	});
});