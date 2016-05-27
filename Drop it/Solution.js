/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/

function dropElements(arr, func) {

  // this variable is used to localize index of arr, where func returns true. From there, we can slice the rest of the array
  // it is set to -1 as true might be on 0 index as well :)
  var truth =  -1;

  arr.map(function(val, index){
    if(truth === -1) { // if the truth hasn't got index yet
      if(func(val) == true) truth = index;
    }
  });
  if(truth !== -1){ //now, return the slice
    return arr.slice(truth);
  }
  else{ // if no truth, return empty
    return [];
  }
}



console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); //should return [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) );//should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}) );//should return [1, 0, 1].
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}) );//should return [].
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); //should return [7, 4].

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); //should return [3, 9, 2].
