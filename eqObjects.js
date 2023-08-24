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

//MESSY CODE
// const eqObjects = function(object1, object2) {
//   let object1keys = Object.keys(object1);
//   let object2keys = Object.keys(object2);
//   let result = true;
//   if (object1keys.length !== object2keys.length) {
//     result = false;
//   }
//   for (let keys of object1keys) {
//     let object1Value = object1[keys];
//     let object2Value = object2[keys];
//     if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
//       if (!eqArrays(object1Value, object2Value)) {
//         result = false;
//         break;
//       }
//     } else if (!Array.isArray(object1Value) && !Array.isArray(object2Value)) {
//       if (object1Value !== object2Value) {
//         result = false;
//         break;
//       }
//     } else {
//       result = false;
//       break;
//     }
//   }
//   return result;
// };


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



assertEqual(eqObjects({one : [1,2,3], two : "2"},{one : [1,2,3], two : "2"}), true);


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false