const tds = document.querySelectorAll("td");
const calcBody = document.getElementById("calc-body");
const numberTable = document.getElementById("calc-numbers");
const operatorTable = document.getElementById("calc-operators");
const calcResult = document.getElementById("result");
const calcClear = document.getElementById("clear");
const calcEquals = document.getElementById("equals");
const calcNumbers = document.querySelectorAll("number");
const calcOperators = document.querySelectorAll("operator");
let firstNumber = null;
let secondNumber;
let operator;
let result;


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

function operate(num1, operator, num2) {
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
  elementId = event.target.id;

  // check if class of click is number or operator
  if (elementClass === "number") {
  // if number
    // check if first number is null
      // assign text content to 1st var
    // if not null 
      // assign text content to 2nd var
    if (firstNumber === null) {
      firstNumber = elementText;
      console.log("first number: " + firstNumber);
    } else {
      secondNumber = elementText;
      console.log("second number: " + secondNumber);
    }
  } else if (elementClass === "operator") {
  // if operator
    // assign value to operator var
    operator = elementText;
    console.log("operator: " + operator);
  };

  // clear valriables 
  if (elementId === "clear") {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    console.log("cleared vars: " + firstNumber + secondNumber + operator);
  }
  // start operation

  // results output

  console.log(elementText);
  console.log('Class: ' + elementClass);
  calcResult.textContent = elementText;
})

/* RESULT OUTPUT */

