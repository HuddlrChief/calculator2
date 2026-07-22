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

let operator = ""
let op1 = ""
let op2 = ""
let total = ""

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsSign = document.querySelector(".equals-sign");
const clearButton = document.querySelector(".button.clear");
const displayScreen = document.querySelector(".display-screen")
let showingResult = false;

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
        if (secondOp === 0) {
            displayScreen.innerText = "Can't do that!"
            return;
        }
        else {
            total = divide(firstOp, secondOp);
    }}
    displayScreen.innerText = total;
    op1 = total.toString();
    operator = ""
    op2 = ""
    showingResult = true;
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);
}

function changeNumber (number) {
    if (showingResult && operator === "") {
        op1 = "";
        op2 = "";
        showingResult = false;
    }
    }
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
    if (!operator) {
        operator = newOp;
    }
    else {
        operate(operator, Number(op1), Number(op2));
        operator = newOp;
    }
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
    if (operator == "" || op1 == "" || op2 == "") {
        return;
    }
    else {
        operate(operator, Number(op1), Number(op2));
}})

clearButton.addEventListener("click", () => {
    displayScreen.innerText = "0";
    op1 = "";
    operator = "";
    op2 = "";
    showingResult = false;
    console.log(`op1 is ${op1}, op2 is ${op2}, 
        operator is ${operator}`);
    }
)