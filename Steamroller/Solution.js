/*
Flatten a nested array. You must account for varying levels of nesting.
*/
var finalArray = [];

function returnValue(val){
  if(Array.isArray(val)){
    val.map(returnValue);
  }
  else{
    finalArray.push(val);
  }
}

function steamrollArray(arr) {

  finalArray.length = 0; //reset array, everytime, cuz it's global

  arr.map(returnValue); // run function

  return finalArray;
}


console.log(steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].
 console.log(steamrollArray([1, [2], [3, [[4]]]]));//should return [1, 2, 3, 4].
 console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
 console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].
