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
let op1 = null
let op2 = null

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

