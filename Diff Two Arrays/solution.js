/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

*/

function diffArray(arr1, arr2) {
  var fusedArr = arr1.concat(arr2); // concatinating two arrays, so we can find multiple existance of values
  var newArr = [];
  fusedArr.filter(function(value, index){ // going to fiter an array and check how many times each value has appeared
  	var timesAppear = 1; // default appearence time
  	for(var i =0; i < fusedArr.length; i++){
  		if(i == index){continue;} // skip the current value
  		if(fusedArr[i] == value){timesAppear++;} // increase appearence value
  	}
  	if(timesAppear == 1) {newArr.push(value);} // push value that appears only once
  });
  return newArr;
}


//Test cases
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"]
