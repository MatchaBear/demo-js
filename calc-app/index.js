function runCalculatorApp(operator, firstNumber, secondNumber) {
  if (operator == "+") {
    const result = firstNumber + secondNumber;
    const formattedResult = `${firstNumber} + ${secondNumber} = ${result}`;
    window.alert(formattedResult);
  } else if (operator == "-") {
    const result = firstNumber - secondNumber;
    const formattedResult = `${firstNumber} - ${secondNumber} = ${result}`;
    window.alert(formattedResult);
  } else if (operator == "*") {
    const result = firstNumber * secondNumber;
    const formattedResult = `${firstNumber} × ${secondNumber} = ${result}`;
    window.alert(formattedResult);
  } else if (operator == "/") {
    const result = firstNumber / secondNumber;
    const formattedResult = `${firstNumber} ÷ ${secondNumber} = ${result}`;
    window.alert(formattedResult);
  } else {
    return window.alert("Please enter correct operator");
  }
}

function runApp() {
  const operator = prompt("Enter operator, either + - * /");
  const firstNumber = Number(prompt("Enter first number"));
  const secondNumber = Number(prompt("Enter second number"));

  runCalculatorApp(operator, firstNumber, secondNumber);
}

runApp();
