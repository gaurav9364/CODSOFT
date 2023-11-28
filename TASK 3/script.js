const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        if (buttonText === "=") {
            calculateResult();
        } else if (buttonText === "C") {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    });
});

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}
