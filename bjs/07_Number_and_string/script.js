let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value +='1';
})

document.getElementById('btn_Sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'Sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'Sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'def'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})




