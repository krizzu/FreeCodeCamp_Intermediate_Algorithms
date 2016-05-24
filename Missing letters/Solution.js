/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

//str.charCodeAt(index) -- return number, ASCII symbol
//String.fromCharCode(num1, num2,..,numN) - returns a string, created from ASCII Symbols

function fearNotLetter(str) {
  var missingChar; // keep undefined :)

  for (var i = 0; i < str.length - 1; i++) { // length - 1 so we won't exceed str length
    if(str.charCodeAt(i+1) - str.charCodeAt(i) != 1){ // if diffrence between next and current character is not 1 (as it should be, in normal order)
      missingChar = str.charCodeAt(i+1) - 1; // number of missing char (if next character is not next in order, that means it was skipped by 1, so -1)
      break;
    }
  }
 return missingChar === undefined ? missingChar : String.fromCharCode(missingChar);
}


console.log(fearNotLetter("abce")); //should return "d".
console.log(fearNotLetter("abcdefghjklmno")); //should return "i".
console.log(fearNotLetter("bcd")); //should return undefined.
console.log(fearNotLetter("yz")); //should return undefined.
