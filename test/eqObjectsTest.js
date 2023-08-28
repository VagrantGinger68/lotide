const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

describe("#eqObjects", () => {
  it("returns true for eqObjects(shirtObject , anotherShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it("returns false for eqObjects(shirtObject , longSleeveShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });
});