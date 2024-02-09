let data = [];
let currentSize = data.length;
function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(item) {
  console.warn(item);
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    // console.warn(pop());
    item[i] = pop();
  }
}

let str = "anil";
str = str.split("");
reverseStr(str);
console.warn(str);
console.warn(str.join(""));
// console.warn("stack", data);

/* example call by reference 

 function test(a){
a[0]=300
 }
 a=[20];
 test(a)
 console.warn(a) only array and object */
