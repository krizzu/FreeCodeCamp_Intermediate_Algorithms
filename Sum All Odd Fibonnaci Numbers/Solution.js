/*

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

*/

function sumFibs(end) {

  var tempArr = []; // arr to keep all fib numbers
  var total = 0; // total sum

  var curr = 0, prev = 1; // starting point, to start at 1
  for (var i = 1; i <= end; i++) {
    sum = curr + prev; // Fibonacci number = F(n-1) + F(n-2)
    prev = curr;  // prev number now becomes current
    curr = sum; // and current is now a sum
    tempArr.push(sum); // push sum into our array
    if(sum >= end) break; //break if we went over a limit
  }

  tempArr = tempArr.filter(function(val, index){
    if (val > end) return false; //if there is value that is bigger than our end-point (function argument)
    return (val % 2 != 0) ? true : false; // keep in array if number is odd
  });

  total = tempArr.reduce(function( a, b){ // sum up the array, save it to total
    return a+b;  
  });

  return total;
}

console.log(sumFibs(1));// should return a number.
console.log(sumFibs(4));// should return 5
console.log(sumFibs(1000));// should return 1785.
