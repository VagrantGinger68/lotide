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

const assertArraysEqual = function(arr1, arr2) {
  //call eqArrays function and check if arrays are equal
  if (eqArrays(arr1,arr2) === true) {
    //Log a success message
    console.log("✅✅✅Assertion Passed: Arrays are identical!");
  } else {
    //Log a failure message
    console.log("🛑🛑🛑Assertion Failed: Arrays are not the same.");
  }
};

assertArraysEqual([1,2, 3], [1,2,3]);