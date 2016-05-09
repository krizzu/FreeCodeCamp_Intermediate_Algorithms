/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45

*/

function sumAll(arr) {
	function sumArr(total, current){ // function for summing all elements in array (used in .reduce method)
		return total+current;
	}
	function extendArray (arr){ // function that fills array with numbers
		var newArray = [];
		//check "which way" array has to be filled in
		if(arr[0] > arr[1]){
			for(var i = arr[1]; i <= arr[0]; i++){
				newArray.push(i);
			}
		}
		else {
			for(var i = arr[0]; i <= arr[1]; i++){
				newArray.push(i);
			}
		}
		return newArray; //  array filled with numbers
	}
	arr = extendArray(arr);
	return arr.reduce(sumArr, 0); // done
}

//Testing in here
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
