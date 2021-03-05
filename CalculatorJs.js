"use strict";

let value = document.querySelector(".userinput");
let output = document.querySelector(".output");

document.querySelector("#one").addEventListener("click", read);
document.querySelector("#two").addEventListener("click", read);
document.querySelector("#three").addEventListener("click", read);
document.querySelector("#four").addEventListener("click", read);
document.querySelector("#five").addEventListener("click", read);
document.querySelector("#six").addEventListener("click", read);
document.querySelector("#seven").addEventListener("click", read);
document.querySelector("#eight").addEventListener("click", read);
document.querySelector("#nine").addEventListener("click", read);
document.querySelector("#zero").addEventListener("click", read);
document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#decimal").addEventListener("click", read);
document.querySelector("#plus").addEventListener("click", operator);
document.querySelector("#minus").addEventListener("click", operator);
document.querySelector("#multiply").addEventListener("click", operator);
document.querySelector("#divide").addEventListener("click", operator);
document.querySelector("#negate").addEventListener("click", operator);
document.querySelector("#modulo").addEventListener("click", operator);
document.querySelector("#equal").addEventListener("click", calculate);

function read() {
  if (value.textContent === "0") {
    value.textContent = event.target.textContent;
  } else {
    value.textContent += event.target.textContent;
  }
}

function clear() {
  value.textContent = "0";
  output.textContent = "0";
}

function operator() {
  if (event.target.textContent == "+/-") {
    value.textContent += "*-1";
  } else {
    value.textContent += event.target.textContent;
  }
}

function calculate() {
  output.textContent = "to be calculated";
}