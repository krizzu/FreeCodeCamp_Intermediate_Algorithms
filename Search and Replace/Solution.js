/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/


function myReplace(str, before, after) {

  if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90){// if before is upper case, change after to upper case
    after = after.split("");//change word to an array
    after.splice(0, 1, after[0].toUpperCase()); // and replace first entry (first letter) with it's upper case letter
    after = after.join(""); //change it back to string
  }

  str = str.replace(before, after); // replace before with after
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); //shoudl return "A quick brown fox leaped over the lazy dog", "jumped"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //should return "He is Sitting on the couch".
