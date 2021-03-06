"use strict";

const value = document.querySelector(".userinput");
const output = document.querySelector(".output");

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
    output.textContent *= -1;
  } else {
    value.textContent += event.target.textContent;
  }
}

function calculate() {
  let expression = value.textContent;
  let number = 0;
  let input_array = [];
  let decimal_count = 1;
  let decimal_flag = false;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    if (parseInt(expression[i]) && decimal_flag == false) {
      //Reading the numbers.
      number = 10 * number + parseInt(expression[i]);
    } else if (expression[i] == ".") {
      decimal_flag = true;
    } else if (decimal_flag && parseInt(expression[i])) {
      //decimal values are added to the number.
      number += parseInt(expression[i]) / Math.pow(10, decimal_count);
      decimal_count += 1;
    } else {
      //collecting separate numbers and operators in array.
      console.log(number);
      input_array.push(number);
      input_array.push(expression[i]);
      number = 0;
      decimal_count = 1;
      decimal_flag = false;
    }
  }
  input_array.push(number);
  console.log(input_array);

  result = input_array[0];
  for (let i = 1; i < input_array.length; i += 2) {
    switch (input_array[i]) {
      case "+":
        result += input_array[i + 1];
        break;
      case "-":
        result -= input_array[i + 1];
        break;
      case "*":
        result *= input_array[i + 1];
        break;
      case "/":
        result /= input_array[i + 1];
        break;
      case "%":
        result %= input_array[i + 1];
    }
  }
  console.log(result);
  output.textContent = result;
}
