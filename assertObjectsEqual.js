const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  let result = true;
  //check that arrays are same length
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    //check that objects are the same
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

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

const assertObjectEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectEquals({arr1 : [1,3,2], two : 2}, {arr1 : [1,3,2], two : 2});
