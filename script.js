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
    switch (op) {
        case '+' :
            return add(a, b);

        case '-' :
            return subtract(a, b);

        case '*' :
            return multiply(a, b);

        case '/' :
            return divide(a, b);

    }
}

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

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (isTapping) {
            display.textContent = number.textContent
            isTapping = false;
        }
        else if (display.textContent.length <= 8){
            display.textContent += number.textContent}
        })
})


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (operator.textContent == '=') {
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
            op = operator.textContent;
        }
        isTapping = true;
    })
})

dot.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        display.textContent += dot.textContent
        isTapping = false;
    }
})

clear.addEventListener('click', () => {
    fisrtNum = undefined;
    secondNum = undefined;
    op = undefined;
    isTapping = true;
    display.textContent = '0';
})

back.addEventListener('click', () => {
    if (display.textContent != '') {
        display.textContent = display.textContent.slice(0,-1);
    }
})