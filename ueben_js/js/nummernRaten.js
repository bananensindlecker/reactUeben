const min =Number(window.prompt("Minimum:"));
const max =Number(window.prompt("Maximum:"));

let tipp;
let running = true;

zufallsZahl = Math.floor(Math.random()* (max-min+1))+min;
console.log("die Zahl ist: "+zufallsZahl);
let attempts = 1;
while(running)
{
    tipp = Number(window.prompt("tipp:"));
    console.log(typeof tipp, tipp);
    
    if (tipp < min || tipp > max || isNaN(tipp)) {
        window.alert("Wähle eine gültige Zahl!");
        continue;
    }else if (tipp < zufallsZahl){
        window.alert("die zahl ist größer!");
        attempts++;
    }else if (tipp > zufallsZahl){
        window.alert("die zahl ist kleiner!");
        attempts++;
    }else if (tipp == zufallsZahl){
        window.alert("Richtig, die Zahl war: "+zufallsZahl+" du hast "+attempts+ " Versuche gebraucht um sie zu erraten!");
        running == false;  
        break;
    }

//    switch (true) {
//        case tipp == zufallsZahl:
//            window.alert("Richtig, die Zahl war: "+zufallsZahl+" du hast "+attempts+ " Versuche gebraucht um sie zu erraten!");
//            running == false;
//            break;
//        case tipp < min || tipp > max || isNaN(tipp):
//            window.alert("Wähle eine gültige Zahl!");
//            break;
//        case tipp < zufallsZahl:
//            window.alert("die zahl ist größer!");
//            attempts++;
//            break;
//        case tipp > zufallsZahl:
//            window.alert("die zahl ist kleiner!");
//            attempts++;
//            break;
//    }

}
    
