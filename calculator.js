var currentDisplay = '';

document.getElementById('clear').addEventListener("click" , () => {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('divide').addEventListener("click" , () => {
  currentDisplay += "/";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('multiple').addEventListener("click" , () => {
  currentDisplay += "*";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('seven').addEventListener("click" , () => {
  currentDisplay += "7";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('eight').addEventListener("click" , () => {
  currentDisplay += "8";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('nine').addEventListener("click" , () => {
  currentDisplay += "9";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('subtract').addEventListener("click" , () => {
  currentDisplay += "-";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('four').addEventListener("click" , () => {
  currentDisplay += "4";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('five').addEventListener("click" , () => {
  currentDisplay += "5";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('six').addEventListener("click" , () => {
  currentDisplay += "6";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('plus').addEventListener("click" , () => {
  currentDisplay += "+";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('one').addEventListener("click" , () => {
  currentDisplay += "1";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('two').addEventListener("click" , () => {
  currentDisplay += "2";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('three').addEventListener("click" , () => {
  currentDisplay += "3";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('equals').addEventListener("click" , () => {
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
});

document.getElementById('percentage').addEventListener("click" , () => {
  currentDisplay += "%";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('zero').addEventListener("click" , () => {
  currentDisplay += "0";
  document.querySelector("#display").value = currentDisplay;
});

document.getElementById('dot').addEventListener("click" , () => {
  currentDisplay += ".";
  document.querySelector("#display").value = currentDisplay;
});
document.getElementById('cross').addEventListener("click" , () => {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
});