describe('cheking model', function(){
	it('should print value by reading textbox', function(){
		browser.get('http://localhost:3000');
		element(by.model('ctrl.name')).sendKeys('write first protractor test');
		var message = element(by.css('.message'));
		expect(message.getText()).toEqual('write first protractor test');
	});
});