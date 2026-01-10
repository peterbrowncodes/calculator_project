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
      } 
      else if (operator === "-") {
        return subtraction(num1, num2);
      } 
      else if (operator === "*") {
        return multiplication(num1, num2).toFixed(2);
      } 
      else if (operator === "/") {

        // if dividing by 0
        if (num1 === 0 || num2 === 0) {
          return 'STOP IT! NOW!';
        } 
        
        else {
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

function clearVars() {
  firstNumberArray = [];
  firstNumber = 0;
  secondNumberArray = [];
  secondNumber = 0;
  operator = null;
  console.log("cleared vars: " + firstNumber + ' ' + secondNumber + ' '+ operator);
}

calcBody.addEventListener('click', function(event) {
  elementText = event.target.textContent;
  elementClass = event.target.className;
  elementId = event.target.id;

  // check if class of click is number or operator
  if (elementClass === "number") {
  // if number
    // first number
    if (operator === null) {
      selectedNum = Number(elementText);
      concatNum(selectedNum, firstNumberArray);
      firstNumber = Number(joinNum(firstNumberArray));
      console.log("first number array: " + firstNumberArray);
      console.log("first number: " + firstNumber);
      calcResult.textContent = `${firstNumber}`;
    } 
    
    // second number
    else {
      selectedNum = Number(elementText);
      concatNum(selectedNum, secondNumberArray);
      secondNumber = Number(joinNum(secondNumberArray));
      console.log("second number array: " + secondNumberArray);
      console.log("second number: " + secondNumber);
      calcResult.textContent = `${firstNumber} ${operator} ${secondNumber}`
    }

  // if operator
  } else if (elementClass === "operator") {
      operator = elementText;
      
      // is operator null
      if (operator === null) {
        console.log("operator: " + operator);
        calcResult.textContent = `${firstNumber} ${operator}`
      } 

      // operator is not null
      else {
        result = operate(firstNumber, secondNumber, operator);
        console.log(result);
        calcResult.textContent = result;
        firstNumber = Number(result);
        console.log("operator: " + operator);
        calcResult.textContent = `${firstNumber} ${operator}`
        secondNumberArray = [];
        secondNumber = null;
        operator = null;
      }

  };


  // clear valriables 
  if (elementId === "clear") {
    clearVars();
    calcResult.textContent = 0;
  }

  // results output
  if (elementId === "equals") {
    if (operator === null) {
    calcResult.textContent = Number(firstNumber);
    }
    else if (secondNumber === null) {
      secondNumber = 0;
    } 
    else {
      result = Number(operate(firstNumber, secondNumber, operator));
      if (result < 0 || result === undefined ) {
        result = 0;
      }
      calcResult.textContent = result;
      console.log(result);  
      clearVars();
    }
  }
  console.log(elementText);
  console.log('Class: ' + elementClass);
})
