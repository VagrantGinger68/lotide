const findKeyByValue = function(object, value) {
  for (let keys of Object.keys(object))
    if (object[keys] === value) {
      return keys;
    }
};

module.exports = findKeyByValue;