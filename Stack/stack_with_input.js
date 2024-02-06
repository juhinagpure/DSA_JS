let stack = [];
let currentIndex = -1;
let max = 5;

const inputElement = document.getElementById("element-input");
const stackElement = document.getElementById("stack-container");

function push() {
  const val = inputElement.value;
  if (!val) return alert("Enter input element!");

  if (currentIndex + 1 >= max) {
    alert("Stack is full you can not add " + val);
  } else {
    currentIndex += 1;
    stack[currentIndex] = val;

    const spanElement = document.createElement("span");
    spanElement.innerText = val;
    spanElement.id = `element-${currentIndex}-${val}`;
    spanElement.style.order = max - currentIndex;

    stackElement.appendChild(spanElement);

    inputElement.value = "";
    inputElement.focus();
  }
}

function pop() {
  if (currentIndex > -1) {
    const popVal = stack[currentIndex];
    const currentSpanElement = document.getElementById(
      `element-${currentIndex}-${popVal}`
    );
    currentSpanElement.remove();
    currentIndex -= 1;
    stack.length = currentIndex + 1;
  } else {
    alert("stack is already empty");
  }
}
