const display = document.getElementById("display");

function addToDisplay(input) {
    display.value += input;
}
function calc() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR"
    }
}
function clearDisplay() {
    display.value = "";
    console.log("cleared");
}