let f = require('./functions');
let assert = require('assert');

describe('the identity function', () => {
  it('should return the number passed in as the argument', () => {
    const actual = f.identity(3);
    const expected = 2;

    assert.equal(actual, expected);
  });
});
