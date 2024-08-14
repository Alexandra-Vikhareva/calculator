let fisrtNum,
    secondNum,
    op;
let isTapping = true;

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('#dot');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');

function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) return 'lol'
    else return a / b
}

function operate(a, b, op) {
    let res;
    switch (op) {
        case '+' :
            res = add(a, b);
            break
        case '-' :
            res = subtract(a, b);
            break
        case '*' :
            res = multiply(a, b);
            break
        case '/' :
            res = divide(a, b);
            break
    };

    let n = String(Math.floor(res)).length

    if (n > 9) {
        return NaN
    } 
    else if (String(res).length > 9) {
        return (Math.round(res * 10 ** (8 - n))) / 10 ** (8 - n)
    }
    return res
}

function writeNumber(reference) {
    if (isTapping) {
        display.textContent = reference
        isTapping = false;
    }
    else if (display.textContent.length <= 8){
        display.textContent += reference}
};

function doMathFunctions(reference) {
    if (reference == '=') {
        secondNum = display.textContent;
        display.textContent = operate(fisrtNum, secondNum, op);
        fisrtNum = undefined;
        secondNum = undefined;
        op = undefined;
    }
    else {
        if (fisrtNum) {
            secondNum = display.textContent;
            fisrtNum = operate(fisrtNum, secondNum, op);
            display.textContent = fisrtNum;
        }
        else {
            fisrtNum = display.textContent;
        }
        op = reference;
    }
    isTapping = true;
}

function clearDisplay() {
    fisrtNum = undefined;
    secondNum = undefined;
    op = undefined;
    isTapping = true;
    display.textContent = '0';
}

function backspace() {
    if (display.textContent.length >= 2) {
        display.textContent = display.textContent.slice(0,-1);
    }
    else {
        display.textContent = 0;
        isTapping = true;
    }
}

function writeDot(){
    if (!display.textContent.includes('.')) {
        display.textContent += dot.textContent
        isTapping = false;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', () => {writeNumber(number.textContent)})
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {doMathFunctions(operator.textContent)})
})

clear.addEventListener('click', () => {
    clearDisplay();
})

back.addEventListener('click', () => {
    backspace();
})

dot.addEventListener('click', () => {
    writeDot();
})

document.addEventListener('keyup', (e) => {

    if (!isNaN(e.key)) {
        writeNumber(e.key);
    }

    if ('+-*/'.includes(e.key) || (e.key == 'Enter')) {
        doMathFunctions(e.key);
    }

    if (e.key == 'Backspace') {
        backspace();
    }

    if (e.key == '.') {
        writeDot();
    }
})