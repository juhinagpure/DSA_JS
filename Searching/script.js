// static way
let data = [20, 40, 60, 5, 10, 70, 80, 99];
let item = 70;
let index = undefined;
for (i = 0; i <= data.length - 1; i++) {
  //   console.warn(data[i]);
  if (data[i] === item) {
    index = i;
    break;
  }
}
console.warn(index);
// console.warn(data.indexOf(item));
// data.splice(2, 1);
// console.warn(data);

// Dynamic way
function searchElement() {
  let data = [20, 40, 60, 5, 10, 70, 80, 99];
  let item = document.getElementById("searchEl").value;
  let idx = undefined;
  for (i = 0; i <= data.length - 1; i++) {
    //   console.warn(data[i]);
    if (data[i] == parseInt(item)) {
      idx = i;
      //   return alert("Element at index ${idx} is ${data[idx]}`");
      break;
    }
  }
  console.warn(idx);
}

// interview question
//  search duplicate elements
let array = [20, 40, 60, 5, 10, 70, 80, 99, 100, 70];
let value = 70;
//let index=undefined;
let result = [];
for (let i = 0; i <= array.length - 1; i++) {
  if (array[i] === value) {
    result[result.length] = i;
  }

  console.log(result);
}
