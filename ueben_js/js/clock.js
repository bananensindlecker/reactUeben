function updateClock() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,0);
    const minutes = String(now.getMinutes()).padStart(2,0);
    const seconds = String(now.getSeconds()).padStart(2,0);

    const time =  `${hour}:${minutes}:${seconds}`
    document.getElementById("clock").textContent =time
}
updateClock();//inizalisiert die zeit 
setInterval(updateClock,1000); //updated die zeit alle 1000 millisek /1sek