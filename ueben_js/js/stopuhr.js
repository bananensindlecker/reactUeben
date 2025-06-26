const displayTime = document.getElementById("time");

let startTime = 0;
let elapsedTime = 0;
let isOn =false;
let timer = null;


function startTimer() {
    if(!isOn){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isOn =true;
        console.log("timer starts");
    }
}

function stopTimer() {
    if (isOn) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isOn =false;
        console.log("timer stops")
    }
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    isOn=false;
    console.log("timer resets")
    displayTime.textContent="00:00:00:00"
}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime /(1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime /(1000 * 60) % 60);
    let secondes = Math.floor(elapsedTime /1000 % 60);
    let millisecondes = Math.floor(elapsedTime %1000 /10);
    displayTime.textContent = `${String(hours).padStart(2,0)}:${String(minutes).padStart(2,0)}:${String(secondes).padStart(2,0)}:${String(millisecondes).padStart(2,0)}`
}
console.log(elapsedTime);