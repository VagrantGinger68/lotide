# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**
```js
`npm install @vagrantginger68/lotide`
```

</br>

**Require it:**
```js
`const _ = require('@vagrantginger68/lotide');`
```

</br>

**Call it:**
```js
`const results = _.tail([1, 2, 3]) // => [2, 3]`
```
## Documentation

The following functions are currently implemented:

* `head`: A function that returns the first element of an array.
* `tail`: A function that returns all elements except the first in an array.
* `middle`: A function that returns the middle element or elements of an array.
* `without`: A function that removes a specified element from an array.
* `map`: A function that performs a specified callback function on all elements in an array.
* `letterPositions`: A function that returns the index of each location for the letters of a string.
* `takeUntil`: A function that takes the elements of an array until a condition is met, then returns a new array.
* `countOnly`: A function that returns the count of specified elements.
* `countLetters`: A function that returns a count of all letters in a string.
* `findKey`: A function that finds the first key in an object that returns true from a callback function.
* `findKeyByValue`: A function that finds the key that matches the provided value.
* `eqArrays`: A function that compares two array.
* `eqObjects`: A function that compares two objects.
* `assertArraysEqual`: A function that provides a message if two arrays are identical.
* `assertEqual`: A function that checks if two variables are equal.
* `assertObjectsEqual`: A function that checks if two objects are identical.
* `index`: combines all the functions into one object
