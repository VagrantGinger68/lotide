const countLetters = function(str) {
  let letterCount = {};
  let strLowerCase = str.toLowerCase();

  for (let letter of strLowerCase) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
};

module.exports = countLetters;