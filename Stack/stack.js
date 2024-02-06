let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
  if (currentSize >= max) {
    alert("stack is full you can not add  " + newVal);
  }
  data[currentSize] = newVal;
  currentSize++;
}
function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(30);
push(10);
push(50);
pop();
pop();
pop();
pop();
pop();
// push(40);
// push(2);
// push(23);
// push(67);
console.warn(data);
