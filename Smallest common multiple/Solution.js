/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

[3, 5]
3 -> 6 -> 9 -> 12 -> 15 -> 18 etc.
5 -> 10 -> 15 -> 20 etc.

Smallest common multiple is 15

*/

//This solution could use some revision :3

function fillArray(num, start, howMany){ // filling array with numbers, so we can find LCM with this
  var tempArray = [start]; // where to start filling (from what number)
  var numberToFill = num; // and which number to fill (which number to add)

  for (var i = 1; i <= howMany; i++) { // how many - how many numbers
    tempArray[i] = tempArray[i-1] + numberToFill;
  }

  return tempArray;
}

function findCommonMultiple (arr1, arr2){ // finding Common Multiple
  var multiple = [];

  multiple = arr1.filter(function(val){ // check if any value from arr1 is in arr2, if yes, that's Common Multiple
    if( arr2.indexOf(val) !== -1 ) return true;
  });

  return multiple;
}


function findDividedByAll (common, num1, num2){ // from given array with Common Multiple, find one, lowest one, which is dividable by all numbers in given range (num1, num2)
  var number;
  common = common.filter(function(val){ // filter it!
    var stays = true; // if it's dividable, it will stays
    for (var i = num1+1; i < num2; i++) {
      if(val % i !== 0) stays = false; // if not, false, and discard this one
    }
    return stays
  });

  return common[0]; // only the lowest is in our interest!
}


function smallestCommons(arr) {
  var numOneArray =[]; //array for holding multiples of first parameter
  var numTwoArray = []; // array for holding multiples of the second parameter
  var commonMultipleArray = []; // :)
  var finalNumber; // final number, LCM + Dividable by all numbers in range! wow!

  arr = arr.sort(function(a,b){ // sorting array, so we start from the lowest
    return a - b;
  });

  var numOneArray =[arr[0]]; //initial filling array with first argument
  var numTwoArray = [arr[1]]; // initial filling array with first argument


   while(finalNumber == undefined){ // until we find finalNumber
    numOneArray = fillArray(arr[0], numOneArray[numOneArray.length-1], arr[1]*10); // fill array with next entries!
    numTwoArray = fillArray(arr[1], numTwoArray[numTwoArray.length-1], 10); //same!
    commonMultipleArray = findCommonMultiple(numOneArray, numTwoArray); // give us common multiples!
    finalNumber = findDividedByAll(commonMultipleArray, arr[0], arr[1]); // and final number
  }
  return finalNumber;

}



console.log(smallestCommons([1, 5]));// should return 60. -- TESTING, DUNNO WHAT SHOULD RETURN
console.log(smallestCommons([5, 1])); //should return 60.
console.log(smallestCommons([1, 13]));// should return 360360.
console.log(smallestCommons([13, 1]));// should return 360360.
