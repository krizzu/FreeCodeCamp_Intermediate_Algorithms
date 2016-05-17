//Convert the given number into a roman numeral.
var romanTable = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M'
}

function convertToRoman(num) {
  var romanNumber = []; // array for keeping our roman number
  var keyArray = Object.keys(romanTable); // creating array of keys that are counterparts of proporties in our romanTable
  keyArray = keyArray.join(',').split(',').map(function(t){return parseInt(t)}); // change array to hold integers instead of string

  //To convert number from decimal to roman :
	//GOAL 1: first we need to find the higest decimal value (keys in romanTable) that is less or equal
  //to given number ( num ) and its corresponding roman number (proporties in our romanTable)
  while(num > 0) { // do it until we find the whole roman number
    for(var i = 0; i < keyArray.length; i++){ // go through table to find a number from GOAL 1.
      if(num >= keyArray[i]){ // if its bigger,
        if(i != 12 && num < keyArray[i+1]){ // check if its not the higest possible (M)
					//GOAL 2: If that number is found, push it into our roman table and substract its value (keys in romanTable object) from our number (num)
          romanNumber.push(romanTable[keyArray[i]]); //
          num -= keyArray[i]; // and substract roman value from our number
        }
        else if (i == 12){ // if i == 12, that means we reach the higest possible value. Just Add highest roman number (M) and proceed further
          romanNumber.push('M');
          num -= 1000;
        }
      }
    }
  } // repeat GOAL 1 and 2 until our number is less then 0

  return romanNumber.join(""); // return our roman number as whole string
}
