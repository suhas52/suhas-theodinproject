function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function calculate(func, num1, num2) {
    return func(num1, num2);
}

console.log(calculate(sub, 5, 3))