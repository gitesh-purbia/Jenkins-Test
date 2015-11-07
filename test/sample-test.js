var assert = require('assert');

describe('thats a sample test', function(){
	it('should say Hello world', function(){
		assert.equal('Hello world', testmocha());
	});
});

var testmocha = function(){
	return "Hello world";
};
