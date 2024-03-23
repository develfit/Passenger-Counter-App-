let count = 0;
let counterVal = document.getElementById('counter-val');
let entryVal = document.getElementById("save-el")
function increment() {
  count++;
  counterVal.innerText = count;
}

function decrement() {
  count--;
  counterVal.innerText = count;
}

function save() {
  let entry = count + " - ";
  entryVal.innerText += entry
  console.log(counterVal.innerText);
}