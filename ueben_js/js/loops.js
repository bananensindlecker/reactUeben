let username = ""

    //erst checken, dan tuhen
//while (username === "") {
//    username = window.prompt("nutzername:");
//}

    //erst tuhen, dan checken
//do {
//    username = window.prompt("nutzername:");
//} while (username ==="");

console.log("hallo "+ username);

    //for loop aufzählent
for (let I = 0; I <= 20; I++) {
    console.log("Hallo Nummer "+I)
    if (I == 13) {
        continue//skipped einen durchlauf
    }
    if (I == 16) {
        break//Beendet den loop vorzeitig
    }
}
