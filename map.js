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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), map(words, word => word[0]));