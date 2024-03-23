let count = 0;
let counterVal = document.getElementById('counter-val');
let entryVal = document.getElementById("save-el")
function increment() {
  count++;
  counterVal.textContent = count;
}

function decrement() {
  count--;
  counterVal.textContent = count;
}

function save() {
  let entry = count + " - ";
  entryVal.textContent += entry
  count = 0
  counterVal.textContent = count
  
}