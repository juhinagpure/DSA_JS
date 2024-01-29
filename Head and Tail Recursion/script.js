// Head Recursion:
/*In head recursion, the recursive call is made first before any other processing in the function. 
 Here's an example with a function that calculates the factorial of a number using head recursion.*/

function headFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * headFactorial(n - 1);
  }
}

// Example usage
console.log(headFactorial(5)); // Output: 120

// Tail Recursion:
/*In tail recursion, the recursive call is the last thing executed by the function. 
Here's an example with a function that calculates the factorial of a number using tail recursion.*/

function tailFactorial(n, accumulator = 1) {
  if (n === 0) {
    return accumulator;
  } else {
    return tailFactorial(n - 1, n * accumulator);
  }
}

// Example usage
console.log(tailFactorial(5)); // Output: 120

// Head Recursion (Fibonacci Sequence):
function headFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return headFibonacci(n - 1) + headFibonacci(n - 2);
}

// Example usage
console.log(headFibonacci(7)); // Output: 13
