'use strict';

var f = require('./functions');
var assert = require('assert');

describe('the identity function', function () {
  it('should return the number passed in as the argument', function () {
    var actual = f.identity(2);
    var expected = 2;

    assert.equal(actual, expected);
  });
});