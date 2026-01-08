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