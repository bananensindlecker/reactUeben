
//let a = 3.5;
//
//let b = Math.round(a);      // runden
//let c = Math.floor(a);      // immer abrunden
//let d = Math.ceil(a);       // immer aufrunden
//let e = Math.trunc(a);      // löscht nachkommastellen
//let f = Math.sqrt(a);       //quadratwurzel
//let g = Math.sign(a);       // -1 =negativ | 0 =0 | 1 =positiv
//let h = Math.max(a, b, c);  //Größte zahl in Liste
//let i = Math.min(a, b, c);  //Kleinste zahl in Liste

const roll = document.getElementById("neueZahl");
const zahl = document.getElementById("zahl");
let zufallsZahl;

roll.onclick = function(){
    zufallsZahl = Math.floor(Math.random()* 100)+1; //zufällige zahl von 1 - 100
    zahl.textContent = zufallsZahl;
}
