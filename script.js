// Variables necesarias.
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let results = [];

// Funciones esenciales del proceso a simular.
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
    if (b === 0) {
        return "Error: Division by zero";
    } else {
        return a / b;
    }
}

function percentage(a, b) {
    return (a / b) * 100;
}

// Función para mostrar resultados con alerta.
function showResult(operation, result) {
    alert(`The result of the ${operation} is: ${result}`);
}

// Objetos JavaScript 
let operations = {
    add: add(num1, num2),
    subtract: subtract(num1, num2),
    multiply: multiply(num1, num2),
    divide: divide(num1, num2),
    percentage: percentage(num1, num2)
};

// Agregar resultados al array.
results.push({operation: 'addition', result: operations.add});
results.push({operation: 'subtraction', result: operations.subtract});
results.push({operation: 'multiplication', result: operations.multiply});
results.push({operation: 'division', result: operations.divide});
results.push({operation: 'percentage', result: operations.percentage});

// Métodos para buscar y filtrar.
function findOperation(name) {
    return results.find(result => result.operation === name);
}

function filterResults(condition) {
    return results.filter(result => typeof result.result === condition);
}

// Menú de opciones para que el usuario elija la operación.
let option = prompt(
    "Choose an operation:\n" +
    "1. Addition\n" +
    "2. Subtraction\n" +
    "3. Multiplication\n" +
    "4. Division\n" +
    "5. Percentage"
);

switch(option) {
    case "1":
        showResult('addition', operations.add);
        break;
    case "2":
        showResult('subtraction', operations.subtract);
        break;
    case "3":
        showResult('multiplication', operations.multiply);
        break;
    case "4":
        showResult('division', operations.divide);
        break;
    case "5":
        showResult('percentage', operations.percentage);
        break;
    default:
        alert("Invalid option");
}

// Mostrar resultados en la consola.
console.log("Operation results:");
results.forEach(result => console.log(`${result.operation}: ${result.result}`));

// Ejemplo de búsqueda y filtrado.
console.log("Search for 'addition' operation:", findOperation('addition'));
console.log("Filter numeric results:", filterResults('number'));