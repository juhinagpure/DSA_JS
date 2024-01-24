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
