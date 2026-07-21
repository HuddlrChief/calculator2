function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b ) {
    return a / b;
}

let operator = null
let op1 = ""
let op2 = ""

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsSign = document.querySelector(".equals-sign");
const clearButton = document.querySelector(".button.clear");
const displayScreen = document.querySelector(".display-screen")

function operate (action, firstOp, secondOp) {
    if (action === "+") {
        return add(firstOp, secondOp);
    }
    else if (action === "-") {
        return subtract(firstOp, secondOp);
    }
    else if (action === "*") {
        return multiply(firstOp, secondOp);
    }
    else {
        return divide(firstOp, secondOp);
    }
}

function changeNumber (number) {
    if (!operator) {
        op1 += number;
        displayScreen.innerText = op1;
    }
    else {
        op2 += number;
        displayScreen.innerText = op2;
    }
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);
}

function changeOperator (newOp) {
    operator = newOp;
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeNumber(button.innerText);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeOperator(button.innerText);
  });
});