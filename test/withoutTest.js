const assert = require('chai').assert;
const without = require("../without");

describe("#without", () => {
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ["lighthouse"]), ['hello', 'world']);
  });
});