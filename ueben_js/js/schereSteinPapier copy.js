const userSchere = document.getElementById("schere");
const userStein = document.getElementById("stein");
const userPapier = document.getElementById("papier");
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
    switch (true) {
        case random <0.3333333333333333:output ="Schere"; break;
        case random >0.6666666666666666:output ="Stein"; break;
        case random <0.6666666666666666 && random >0.3333333333333333:output ="Papier"; break;
    }
    console.log(output);
    return output;
}



userSchere.addEventListener("click",()=>{
    let userInput = "Schere";
    let computerInput = getRandomInput();
    switch (true) {
        case computerInput == "Schere": result = "Unentschieden";break;
        case computerInput == "Stein": result = "Verlohren";break;
        case computerInput == "Papier": result = "Gewonnen";break;
    }
    displayResult.textContent =result;
    displayComputerMove.textContent ="der Computer spielt "+computerInput;
    console.log(result);

    result =="Gewonnen" ? winStreak++:null;
    result =="Gewonnen" ? wins++:null;
    result =="Verlohren" ? winStreak = 0 :null;

    displaywinStreak.textContent = winStreak+" Gewinne in folge";
    console.log(winStreak);
    trys++;
    console.log("trys: "+trys);
    console.log("wins: "+wins);
    average = (wins /trys).toFixed(2);
    displayAverage.textContent = "durchschnitt: "+average+" gewinne pro versuch";
});

userStein.addEventListener("click",()=>{
    let userInput = "Stein";
    let computerInput = getRandomInput();
    switch (true) {
        case computerInput == "Schere": result = "Gewonnen";break;
        case computerInput == "Stein": result = "Unentschieden";break;
        case computerInput == "Papier": result = "Verlohren";break;
    }
    displayResult.textContent =result;
    displayComputerMove.textContent ="der Computer spielt "+computerInput;
    console.log(result);

    result =="Gewonnen" ? winStreak++:null;
    result =="Gewonnen" ? wins++:null;
    result =="Verlohren" ? winStreak = 0 :null;
    displaywinStreak.textContent = winStreak+" Gewinne in folge";
    console.log(winStreak);
    trys++;
    console.log("trys: "+trys);
    console.log("wins: "+wins);
    average = (wins /trys).toFixed(2);
    displayAverage.textContent = "durchschnitt: "+average+" gewinne pro versuch";
});

userPapier.addEventListener("click",()=>{
    let userInput = "Papier";
    let computerInput = getRandomInput();
    switch (true) {
        case computerInput == "Schere": result = "Verlohren";break;
        case computerInput == "Stein": result = "Gewonnen";break;
        case computerInput == "Papier": result = "Unentschieden";break;
    }
    displayResult.textContent =result;
    displayComputerMove.textContent ="der Computer spielt "+computerInput;
    console.log(result);
    
    result =="Gewonnen" ? winStreak++:null;
    result =="Gewonnen" ? wins++:null;
    result =="Verlohren" ? winStreak = 0 :null;
    

    displaywinStreak.textContent = winStreak+" Gewinne in folge";
    console.log(winStreak);
    trys++;
    console.log("trys: "+trys);
    console.log("wins: "+wins);
    average = (wins /trys).toFixed(2);
    displayAverage.textContent = "durchschnitt: "+average+" gewinne pro versuch";
});
