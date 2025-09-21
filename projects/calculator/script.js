const buttons = document.querySelector(".buttons");
const leftOperandSpan = document.getElementById("leftoperand")
const operatorSpan = document.getElementById("operator")
const rightOperandSpan = document.querySelector("#rightoperand");
const resultSpan = document.getElementById("result")
let elements = {}
const buttonElements = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x", "C", "0", "=", "/"]
let leftOperand = 0;
let rightOperand = 0;
let operator = null;
let operatorFilled = false;

function add(leftOperand, rightOperand) {
    return leftOperand + rightOperand;
}

function sub(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
}

function multiply(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
}

function divide(leftOperand, rightOperand) {
    return leftOperand / rightOperand;
}

function operate(func, leftOperand, rightOperand) {
    return func(Number(leftOperand), Number(rightOperand));
}


function isNumeric(str) {
  return !isNaN(str);
}

buttonElements.map((btnNmb) => {
    const key = `btn${btnNmb}`;
    elements[key] = document.createElement("button");
    elements[key].style.width = "23%";
    elements[key].style.height = "15%";
    elements[key].id = key;
    elements[key].textContent = btnNmb
    buttons.appendChild(elements[key])
})


buttons.addEventListener("click", (e) => {
    target = e.target.textContent;
    if (target === "C") {
        location.reload()
    }
    else if (isNumeric(target) && !(operatorFilled) && leftOperand !== result) {
        leftOperandSpan.textContent += target;
    }

    else if (!(isNumeric(target) && target !== "=") && !(operatorFilled)) {
        operator = target;
        operatorSpan.textContent = target;
        operatorFilled = true;
    }
    else if (operatorFilled && target !== "=") {
        rightOperandSpan.textContent += target;   
    }
    else {
        leftOperand = leftOperandSpan.textContent;
        rightOperand = rightOperandSpan.textContent;
        
        let result = 0;
        switch (operator) {
            case "+": result = add(Number(leftOperand), Number(rightOperand)); break;
            case "-": result = sub(Number(leftOperand), Number(rightOperand)); break;
            case "x": result = multiply(Number(leftOperand), Number(rightOperand)); break;
            case "/": result = divide(Number(leftOperand), Number(rightOperand)); break;
        }
        resultSpan.textContent = result;
        leftOperand = result;
    }
})

