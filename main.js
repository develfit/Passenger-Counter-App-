let count = 0;

function increment() {
  count++;
  let counterVal = document.getElementById("counter-val");
  counterVal.innerText = count;
}

function decrement() {
  count--;
  let counterVal = document.getElementById("counter-val");
  counterVal.innerText = count;
}