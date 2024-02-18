// Calucaltor programm

const display = document.getElementById('display');


function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = Number(result.toFixed(5)); // Evite les surplus de décimales


    } catch (error) {
        display.value = 'Error';
    }

}

function ClearDisplay() {
    display.value = '';

}
