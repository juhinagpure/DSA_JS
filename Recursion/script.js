// Recursion

// function apple(x) {
//   console.warn(x);
//   if (x < 10) {
//     apple(x + 1);
//   }
// }
// let Fact = 0;
// apple(Fact);

// 5
function factorial(item) {
  if (item == 0) {
    return 1;
    //code
  }
  return item * factorial(item - 1);
  //code
}
let data = 5;
console.warn(factorial(data));
// console.warn(5*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1)*factorial(1-1)

// 1. Fibonacci Series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55

// // 2.Sum of Natural Numbers
function sumOfNaturalNumbers(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfNaturalNumbers(n - 1);
}

// Example
console.log(sumOfNaturalNumbers(5)); // 15 (1+2+3+4+5)
console.log(sumOfNaturalNumbers(10)); // 55
console.log(sumOfNaturalNumbers(3)); // 6
