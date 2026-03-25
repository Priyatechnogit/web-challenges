console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const num1 = Number(event.target.numberA.value);
  const num2 = Number(event.target.numberB.value);
  const operator = event.target.elements.operator.value;
   if (operator === "addition") {
    result = add(num1, num2);
  } else if (operator === "subtraction") {
    result = subtract(num1, num2);
  } else if (operator === "multiplication") {
    result = multiply(num1, num2);
  } else if (operator === "division") {
    result = divide(num1, num2);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
