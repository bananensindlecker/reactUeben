const displayResult = document.getElementById("ergebnis");
const displaywinStreak = document.getElementById("streak");
const displayComputerMove = document.getElementById("computerZug");
const displayAverage = document.getElementById("Average");

let result;
let winStreak = 0;
let trys = 0;
let wins = 0;
let average = 0;

function getRandomInput(){
    let random = Math.random();
    let output;
    trys++;
    average = (wins /trys).toFixed(2);

    switch (true) {
        case random <0.3333333333333333:output ="Schere"; break;
        case random >0.6666666666666666:output ="Stein"; break;
        case random <0.6666666666666666 && random >0.3333333333333333:output ="Papier"; break;
    }
    console.log(output);
    return output;
}
function rockPapierSissors(userInput){
    let computerInput = getRandomInput();
    switch (userInput) {
        case "Stein":
            (computerInput == "Stein") ? result = "Unendschieden":null;
            (computerInput == "Schere") ? result = "Gewonnen":null;
            (computerInput == "Papier") ? result = "Verlohren":null;
        ;break;
        case "Schere":
            (computerInput == "Schere") ? result = "Unendschieden":null;
            (computerInput == "Papier") ? result = "Gewonnen":null;
            (computerInput == "Stein") ? result = "Verlohren":null;
        ;break;
        case "Papier":
            (computerInput == "Papier") ? result = "Unendschieden":null;
            (computerInput == "Stein") ? result = "Gewonnen":null;
            (computerInput == "Schere") ? result = "Verlohren":null;
        ;break;
    }

    result =="Gewonnen" ? winStreak++:null;
    result =="Gewonnen" ? wins++:null;
    result =="Verlohren" ? winStreak = 0 :null;

    displayComputerMove.textContent ="der Computer spielt "+computerInput;//computer Zug anzeigen
    displayResult.textContent =result;//ergebnis anzeigen
    displaywinStreak.textContent = winStreak+" Gewinne in folge";//win streak anzeigen
    displayAverage.textContent = "durchschnitt: "+average+" gewinne pro versuch";//gewinn durchschnitt anzeigen

    //farbe für Ergebnis
    switch (result) {
        case "Gewonnen":displayResult.style.color = "green"; break;
        case "Verlohren":displayResult.style.color = "red"; break;
        case "Unendschieden":displayResult.style.color = "hsl(60, 100%, 40%)"; break;
    }
};
