//creating element
const newH1n1 =document.createElement("h1");
const newH1n2 =document.createElement("h1");
const newH2n1 =document.createElement("h2");
const newH2n2 =document.createElement("h2");
const newH2n3 =document.createElement("h2");

//adding attributes
newH1n1.textContent ="i like Pizza1!";//inhalt
newH1n1.id ="myH1";//Id
newH1n1.style.color ="tomato";//text farbe
newH1n1.style.textAlign ="center";//text align

newH1n2.textContent ="i like Pizza2!";

newH2n1.textContent = "h2 für box1";
newH2n2.textContent = "h2 für box2";
newH2n3.textContent = "h2 für box3";


//hinzufügen

    //fügt am ende von body hinzu 
document.body.append(newH1n2);

    //fügt am anfang von body hinzu 
document.body.prepend(newH1n1);

document.getElementById("box1").prepend(newH2n1);
document.getElementById("box2").prepend(newH2n2);
document.getElementById("box3").prepend(newH2n3);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1n1/* dieses*/,box2/*vor diesem */);

const boxes = document.querySelectorAll(".box");
console.log(boxes);
document.body.insertBefore(newH1n1,boxes[0])//so dynamisch die box via index wählen


//remove
document.getElementById("box1").removeChild(newH2n1);//H2 aus box 1 entfernen


// mit style.display = "none" kann ein element unsichtbar gemacht werden ohne platz zu reservieren
// mit style.visibility = "hidden" kann ein element unsichtbar gemacht werden und trotzdem wird platz reserviert