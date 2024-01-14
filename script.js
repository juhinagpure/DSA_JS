// Traversing
let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
//   for (let i = 0; i < data.length; i++) {
//     document.write(`Array ${i} Element is ${data[i]} <br>`);
//   }

//   let x = 3;
//   document.write(data[x]);
function alert(str) {
  const el = document.getElementById("output");
  el.innerText = str;
}
function getElement() {
  const el = document.getElementById("element");
  const idx = Number(el.value);
  console.log(idx);
  if (Number.isNaN(idx)) {
    return alert("Enter no. input");
  }
  if (idx >= 0 && idx < data.length) {
    return alert(`Element at index ${idx} is ${data[idx]}`);
  } else if (idx < 0) {
    alert("Provided index is -ve");
  } else {
    alert("Array index out of bound");
  }
}
