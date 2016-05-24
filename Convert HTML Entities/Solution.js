/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

&  -  &​amp;
<  -  &​lt;
>  -  &​gt;
"  -  &​quot;
'  -  &​apos;

*/



function convertHTML(str) {

  function swapChar(charToSwap){ // that swaps characters to HTML entities
    switch(charToSwap){
      case "&":
        return "&amp;";
        break;
      case "<":
        return "&lt;";
        break;
      case ">":
        return "&gt;";
        break;
      case '"':
        return "&quot;";
        break;
      case "'":
        return "&apos;";
        break;
      default:
        return "ERROR";
        break;
    }
  }
  str = str.replace(/[&<>"']/g, function(match){ // find any of given character, then call function to swap chars
    return swapChar(match);
  });

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));;// should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));;// should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML('Stuff in "quotation marks"'));;// should return Stuff in &​quot;quotation marks&​quot;.
