let display = document.getElementById('display');
let expression = '';

function calculate(value) {
  if (value === '=') {
    try {
      if (expression.includes('^')) {
        expression = expression.replace('^', '**');
      }
      if (expression.includes('sqrt')) {
        expression = expression.replace('sqrt', 'Math.sqrt');
      }
      if (expression.includes('sin')) {
        expression = expression.replace('sin', 'Math.sin');
      }
      if (expression.includes('cos')) {
        expression = expression.replace('cos', 'Math.cos');
      }
      if (expression.includes('tan')) {
        expression = expression.replace('tan', 'Math.tan');
      }
      if (expression.includes('log')) {
        expression = expression.replace('log', 'Math.log10');
      }
      let result = eval(expression);
      display.value = result;
      expression = result.toString();
    } catch (error) {
      display.value = 'Error';
      expression = '';
    }
  } else {
    expression += value;
    display.value = expression;
  }
}

function clearDisplay() {
  display.value = '';
  expression = '';
}

function backspace() {
  expression = expression.slice(0, -1);
  display.value = expression;
}