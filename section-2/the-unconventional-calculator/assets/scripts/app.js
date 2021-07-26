const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + 10 * 3;

// Template Literal - Content Interpolation
let calculationDescription = `${defaultResult} + 10 * 3`;

outputResult(currentResult, calculationDescription);