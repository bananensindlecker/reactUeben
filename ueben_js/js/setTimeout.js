//nicht peräzise nicht für eigendlichen timer geeignet

function sayHallo() {
    console.log("Hallo")
}
//verzögert das ausführen von sayHallo um 3sek
//setTimeout(sayHallo,3000);


let timeoutId;

function startTimer() {
    timeoutId = setTimeout(()=>console.log("Hallo"),3000);
    console.log("startet");
}
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("stoppt");
}

startTimer();

setTimeout(clearTimer,2000);//stopped den timer