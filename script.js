const tds = document.querySelectorAll("td");
const calcBody = document.getElementById("calc-body");
const numberTable = document.getElementById("calc-numbers");
const operatorTable = document.getElementById("calc-operators");
const calcNumbers = document.querySelectorAll("number");
const calcOperators = document.querySelectorAll("operator");
let firstNumber;
let secondNumber;
let operator;

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return addition(num1, num2);
  } else if (operator === "-") {
    return subtraction(num1, num2);
  } else if (operator === "*") {
    return multiplication(num1, num2);
  } else if (operator === "/") {
    return division(num1, num2);
  };
}

function getClass(element) {
  return element.className;
}

calcBody.addEventListener('click', function(event) {
  elementText = event.target.textContent;
  elementClass = event.target.className;
  console.log(elementText);
  console.log('Class: ' + elementClass);
})