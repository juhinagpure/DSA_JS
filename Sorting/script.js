// Array Sorting in JS

let data = [40, 30, 12, 25, 50, 35];
// Before Sorting
console.warn(data);
for (i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
//After Sorting
console.warn(data);
