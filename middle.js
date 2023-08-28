// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   let result = true;
//   //check that arrays are same length
//   if (arr1.length !== arr2.length) {
//     result = false;
//   } else {
//     //check that objects are the same
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         result = true;
//       } else {
//         result = false;
//       }
//     }
//   }
//   return result;
// };

// const middle = function(array) {
//   let middleArray = [];
//   if (array.length <= 2) {
//     return middleArray;
//   } else if (array.length % 2 === 0) {
//     middleArray = [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
//   } else {
//     middleArray = [array[Math.floor(array.length / 2)]];
//   }
//   return middleArray;
// };
// console.log(middle([1,2,3,4,5,6]));





// for (let i = 0; i < array.length; i++) {
//   if (array.length === 2) {
//     middleArray = [];
//   } else {
//     middleArray += array[(array.length / 2)];
//   }
// }
// console.log(middleArray);








const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const [index, value] of arr1.entries()) {
    if (value !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅ Assertion Passed: Arrays are equal.");
  } else {
    console.log("❌ Assertion Failed: Arrays are not equal.");
  }
};

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); // Passes
assertArraysEqual(middle([1, 2]), []); // Passes
assertArraysEqual(middle([1, 2, 3]), [2]); // Passes
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Passes
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Passes
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Passes
