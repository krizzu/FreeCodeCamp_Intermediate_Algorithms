/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



*/


function spinalCase(str) {

  str = str.replace(/[_]/g, "-"); // replace underscores with '-'
  str = str.replace(/\s/g, "-"); // replace white spaces with '-'
  str = str.replace(/[A-Z]/g, function(match){ // change uppercase to lower case and add '-' if not fist word
    if(str.search(match) == 0) return match.toLowerCase();
    return "-"+match.toLowerCase();
  });

  str = str.replace(/--/g, "-"); // get rid of double dashes :)


  return str;
}


console.log(spinalCase("This Is Spinal Tap")); //should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); //should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); //should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); //should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); //should return "all-the-small-things".
