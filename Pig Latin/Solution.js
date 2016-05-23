/*

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

*/


function translatePigLatin(str) {

  var vowel = ['a', 'e', 'i', 'o', 'u'];
  str = str.split(""); // change it to array
  var spliced = ""; //hold spliced letters

  for (var i = 0; i < str.length; i++) {
    if(vowel.indexOf(str[0]) >= 0){ // if first letter is a vowel
      if(!spliced){ //and splice is empty
        str = str.join("");
        str+='way';
        return str;
      }
      else {
        str = str.join("");
        str+=spliced;
        str+='ay';
        return str;
      }
    }
    else { // if first letter is not a vowel
      spliced+=str.splice(0, 1); // cut the first one out, and add it to splice string;
    }
  }
}

console.log(translatePigLatin("california")); //should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); //should return "aragraphspay".
console.log(translatePigLatin("glove")); //should return "oveglay".
console.log(translatePigLatin("algorithm")); //should return "algorithmway".
console.log(translatePigLatin("eight")); //should return "eightway".
