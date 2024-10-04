

const addSymbol = document.getElementById('add');
const subtractSymbol = document.getElementById('subtract');
const multiplicationSymbol = document.getElementById('multiply');
const divisionSymbol = document.getElementById('divide');


// function for addition 
function add(number1, number2) {
    return number1 + number2;
}


// function for subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// function for multiplication
function multiply(number1, number2) {
    return number1 * number2;
}


// function for division
function divide(number1, number2) {
    return number1 / number2;
}

//  printing the results after addition

addSymbol.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//  printing the results after subtraction

subtractSymbol.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


//  printing the results after multiplication

multiplicationSymbol.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//  printing the results after division

divisionSymbol.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});