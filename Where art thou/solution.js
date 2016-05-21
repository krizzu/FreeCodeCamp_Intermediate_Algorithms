/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value,
that was passed on as the second argument.

*/

function whereAreYou(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) { // we gonna do it for every object in this array
    var souKey = Object.keys(source); // source properties

    for (var key in collection[i]) { //get property names for each collection entry
      if(souKey.length == 1){ //if source argument has 1 property to look for
        if(collection[i][key] == source[souKey]){ // if they are the same
          arr.push(collection[i]); // push it into array
        }
      }
      else{ // if source has more then 1 property
        if(collection[i].hasOwnProperty(souKey[0]) && collection[i].hasOwnProperty(souKey[1])){ // check if collection has the same properties
            if(arr.indexOf(collection[i]) == -1) { // check for duplicates! If indexOf returns  -1, it means there is no such object in given array - which means no duplicates!
              arr.push(collection[i]); // and simply push it!
          }
        }
      }
    }
  }

  return arr;
}
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));
