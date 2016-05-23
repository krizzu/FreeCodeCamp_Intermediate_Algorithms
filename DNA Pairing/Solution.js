/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG.

Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function getPair(DNA){ // get matching pair
  switch(DNA){
    case 'T':
      return 'A';
      break;
    case 'A':
      return 'T';
      break;
    case 'C':
      return 'G';
      break;
    case 'G':
      return 'C';
      break;
    default:
      console.log("WRONG DNA");
  }
}

function pairElement(str) {
  str = str.split(""); // change into array
  var completeDNA = []; // this is our main array that holds pairs
  for (var i = 0; i < str.length; i++) {
    var tempArr = [str[i]]; // create temp array
    tempArr.push(getPair(str[i])); // find pair for our DNA
    completeDNA.push(tempArr); //push
  }
  return completeDNA;
}

console.log(pairElement("ATCGA"));// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG"));// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA"));// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
