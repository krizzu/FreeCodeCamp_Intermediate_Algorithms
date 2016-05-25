/*

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2.
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

*/


function isPrime(num){
  var divNum = 0; // number of divisors
  for (var i = 2; i < num; i++) {
    if(num % i == 0) divNum++;
  }
  return divNum > 0 ? false : true; // if there are diffrent divisors than 1 and number itself, then number is not a prime
}

function sumPrimes(num) {
  var total = 0;
  for (var i = 2; i <= num ; i++) {
    if(isPrime(i)) total+=i;
  }
  return total;
}


console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.
