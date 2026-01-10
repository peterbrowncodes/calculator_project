const calcBody = document.getElementById("calc-body");
const numberTable = document.getElementById("calc-numbers");
const operatorTable = document.getElementById("calc-operators");
const calcResult = document.getElementById("result");
const calcClear = document.getElementById("clear");
const calcEquals = document.getElementById("equals");
const calcNumbers = document.querySelectorAll("number");
const calcOperators = document.querySelectorAll("operator");
let selectedNum;
let firstNumber = 0;
let firstNumberArray = [];
let secondNumber = 0;
let secondNumberArray = [];
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

function operate(num1, num2, operator) {
  if (typeof(num1) === "number" && typeof(num2) === "number") {
    if (operator === "+") {
        return addition(num1, num2);
      } else if (operator === "-") {
        return subtraction(num1, num2);
      } else if (operator === "*") {
        return multiplication(num1, num2).toFixed(2);
      } else if (operator === "/") {
        if (num1 === 0 || num2 === 0) {
          return 'STOP IT! NOW!';
        } else {
          let divisionResult;
          quotient = division(num1, num2);
          if (quotient % 1 !== 0) {
            divisionResult = quotient.toFixed(2);
          } else {
            divisionResult = quotient.toFixed(0);
          }
          return divisionResult;
        }
      };
  }
}

function getClass(element) {
  return element.className;
}

function concatNum(num, array) {
  array.push(num);
}

function joinNum(array) {
  return array.join('');
}

calcBody.addEventListener('click', function(event) {
  elementText = event.target.textContent;
  elementClass = event.target.className;
  elementId = event.target.id;

  // check if class of click is number or operator
  if (elementClass === "number") {
  // if number or operator
    if (operator === null) {
      selectedNum = Number(elementText);
      concatNum(selectedNum, firstNumberArray);
      firstNumber = Number(joinNum(firstNumberArray));
      console.log("first number array: " + firstNumberArray);
      console.log("first number: " + firstNumber);
      calcResult.textContent = `${firstNumber}`;
    } 
    else {
      selectedNum = Number(elementText);
      concatNum(selectedNum, secondNumberArray);
      secondNumber = Number(joinNum(secondNumberArray));
      console.log("second number array: " + secondNumberArray);
      console.log("second number: " + secondNumber);
      calcResult.textContent = `${firstNumber} ${operator} ${secondNumber}`
    }
  } else if (elementClass === "operator") {
      if (operator === null) {
        operator = elementText;
        console.log("operator: " + operator);
        calcResult.textContent = `${firstNumber} ${operator}`
      } 
      else {
        result = operate(firstNumber, secondNumber, operator);
        console.log(result);
        calcResult.textContent = result;
        firstNumber = result;
        secondNumber = 0;
        operator = null;
        operator = elementText;
        console.log("operator: " + operator);
        calcResult.textContent = `${firstNumber} ${operator}`
        secondNumberArray = [];
        secondNumber = null;
      }

  };


  // clear valriables 
  if (elementId === "clear") {
    firstNumberArray = [];
    firstNumber = 0;
    secondNumberArray = [];
    secondNumber = 0;
    operator = null;
    calcResult.textContent = 0;
    console.log("cleared vars: " + firstNumber + secondNumber + operator);
  }

  // results output
  if (elementId === "equals") {
    if (operator === null) {
    calcResult.textContent = firstNumber;
    }
    else if (secondNumber === null) {
      secondNumber = 0;
    }
    result = operate(firstNumber, secondNumber, operator);
    calcResult.textContent = result;
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    console.log(result);
  }
  console.log(elementText);
  console.log('Class: ' + elementClass);
})
