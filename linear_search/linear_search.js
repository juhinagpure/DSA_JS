// let data = [30, 13, 45, 78, 2, 9, 5, 50];
// let find = 13;
// let pos = undefined;
// for (let i = 0; i <= data.length; i++) {
//   if (data[i] == find) {
//     pos = i;
//     break;
//   }
// }
// console.warn(pos);
// if (!pos) {
//   alert("Element not found");
// }
function searchEl() {
  let data = [30, 13, 45, 78, 2, 9, 5, 50];
  let find = parseInt(document.getElementById("el").value, 10);
  let pos = undefined;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === find) {
      pos = i;
      break;
    }
  }

  let resultText;
  if (pos === undefined) {
    resultText = "Element not found";
  } else {
    resultText = "Element position is " + pos;
  }

  document.getElementById("result").textContent = resultText;
}
