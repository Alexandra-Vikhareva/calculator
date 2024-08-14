function add(a, b) {
    return a + b
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
            add(a, b);
            break;
        case '-' :
            subtract(a, b);
            break;
        case '*' :
            multiply(a, b);
            break;
        case '/' :
            divide(a, b);
            break;
    }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent.length <= 8){
            display.textContent += number.textContent}
        })
        
})