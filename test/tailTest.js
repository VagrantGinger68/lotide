const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

assertArraysEqual(tail([1,2,3,4,5]), [2,3,4,5]);