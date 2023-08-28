const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const without = require("./without");
const map = require("./map");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

module.exports = {
  head : head,
  tail : tail,
  middle : middle,
  without : without,
  map : map,
  letterPositions : letterPositions,
  takeUntil : takeUntil,
  countOnly : countOnly,
  countLetters : countLetters,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  eqArrays : eqArrays,
  eqObjects : eqObjects
};