let count = 0;
let counterVal = document.getElementById('counter-val');

function increment() {
  count++;
  counterVal.innerText = count;
}

function decrement() {
  count--;
  counterVal.innerText = count;
}

function save() {
  console.log(counterVal.innerText)
}