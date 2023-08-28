const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let numbers = {
  one : "1",
  two : "2",
  three : "3"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});