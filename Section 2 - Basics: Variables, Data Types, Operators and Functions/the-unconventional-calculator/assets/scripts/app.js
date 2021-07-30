// Section 2 - The Unconventional Calculator

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Provide information about the operations executed
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/*
The following functions are related to aithimetic operations
- Addition - add()
- Subtraction - subtract()
- Multiplication - multiply()
- Division - divide()
*/
function add() {
  const enteredNumber = getUserNumberInput();  
  const initialResult = currentResult;
  //currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subctract() {
  const enteredNumber = getUserNumberInput();  
  const initialResult = currentResult;
  //currentResult = currentResult - enteredNumber;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();  
  const initialResult = currentResult;
  //currentResult = currentResult * enteredNumber;
  currentResult *=  enteredNumber;
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();  
  const initialResult = currentResult;
  //currentResult = currentResult / enteredNumber;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// Buttons actions
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subctract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);