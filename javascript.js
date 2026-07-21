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
let total = ""

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsSign = document.querySelector(".equals-sign");
const clearButton = document.querySelector(".button.clear");
const displayScreen = document.querySelector(".display-screen")

displayScreen.innerText = "0";

function operate (action, firstOp, secondOp) {
    if (action === "+") {
        total = add(firstOp, secondOp);
    }
    else if (action === "-") {
        total = subtract(firstOp, secondOp);
    }
    else if (action === "*") {
        total = multiply(firstOp, secondOp);
    }
    else {
        total = divide(firstOp, secondOp);
    }
    displayScreen.innerText = total;
    op1 = total.toString();
    operator = ""
    op2 = ""
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);
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

equalsSign.addEventListener("click", () => {
    operate(operator, Number(op1), Number(op2));
})

clearButton.addEventListener("click", () => {
    displayScreen.innerText = "0";
    op1 = null;
    operator = null;
    op2 = null;
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);}
)