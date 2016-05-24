/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  var completeArray = []; // to concat arrays from arguments
  var finalArray = [];

  for (var i = 0; i < arguments.length; i++) { // concatinating
    completeArray = completeArray.concat(arguments[i]);
  }

  completeArray.map(function (val){ // applying callback function to every completeArray value
    if(finalArray.indexOf(val) == -1){ // if it is not found in finalArray
      finalArray.push(val); // add it
    }
  });
  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
