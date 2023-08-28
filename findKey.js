//Make a function that takes in an object and a callback
const findKey = function(object, callback) {
  //Loop through object to get the keys
  for (let key in object) {
    //If the callback returns true with the object key, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  //If no key is found, return undefined
  return undefined;
};

module.exports = findKey;