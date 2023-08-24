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

const takeUntil = function(array, callback) {
  const result = [];

  for (let element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  return result;
};

//expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

//expect output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]