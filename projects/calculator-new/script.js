const btnContainer = document.querySelector(".button-container");
const buttonOperators = ["C", "%", "/", "*", "-", "+", "="];
const buttonNumerals = ["6", "7", "8", "9", "2", "3", "4", "5", "0", "1", "."];
const buttonContents = buttonNumerals.concat(buttonOperators);
const buttons = {};
const leftOperandSpan = document.querySelector(".left-operand");
const rightOperandSpan = document.querySelector(".right-operand");
const operatorSpan = document.querySelector(".operator");
const resultSpan = document.querySelector(".result-container");
let first_iteration = true;
buttonContents.forEach(element => {
    const key = `btn${element}`;
    buttons[key] = document.createElement("button");
    buttons[key].id = key
    buttons[key].style.width = "25%";
    buttons[key].style.height = "15%";
    buttons[key].textContent = element;
    btnContainer.appendChild(buttons[key]);
});
let result = 0;


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function rem(num1, num2) {
    return num1 % num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function operate(func, num1, num2) {
    return roundNum(func(Number(num1), Number(num2)), 4);
}

function roundNum(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

function getUserInput(e) {
    if (e.target.id in buttons) {
        return e.target
    }
    else {
        return null;
    }
}

function calc(e) {
    const target = getUserInput(e).textContent;
    if (target === "C"){
        location.reload();
    }

    if ((buttonNumerals.includes(target) || target === "-") && first_iteration == true) {
        leftOperandSpan.textContent += target;
    }
    if (buttonOperators.includes(target) && target !== "=") {
        operatorSpan.textContent = target;
        first_iteration = false;
    }
    if (operatorSpan.textContent && buttonNumerals.includes(target)) {
        rightOperandSpan.textContent += target;
    }
    if (target === "=") {
        let left = leftOperandSpan.textContent;
        let right = rightOperandSpan.textContent;
        switch (operatorSpan.textContent) {
            case "+":
                result = operate(add, left, right);
                break;
            case "-":
                result = operate(sub, left, right);
                break;
            case "*":
                result = operate(mul, left, right);     
                break;   
            case "/":
                result = operate(divide, left, right);
                break;
            case "%":
                result = operate(rem, left, right);
            default:
                break;
        }
        resultSpan.textContent = result;
        leftOperandSpan.textContent = resultSpan.textContent;
        rightOperandSpan.textContent = '';
    }
}
btnContainer.addEventListener("click", calc);