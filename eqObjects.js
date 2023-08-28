const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const object1keys = Object.keys(object1);
  const object2keys = Object.keys(object2);

  if (object1keys.length !== object2keys.length) {
    return false;
  }

  for (const key of object1keys) {
    const object1Value = object1[key];
    const object2Value = object2[key];

    if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
      if (!eqArrays(object1Value, object2Value)) {
        return false;
      }
    } else if (object1Value !== object2Value) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;