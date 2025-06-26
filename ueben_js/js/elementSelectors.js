const element = document.getElementById("");// Element nach ID
const fruits =document.getElementsByClassName("");//gibt alle elemente nach class als collection
fruits[0];//greift auf dass erste element zu 
//!! forEach geht nicht mit collections

//collection als array
Array.from(fruits);

const alleH1 = document.getElementsByTagName("h1");//gibt alle h1 elemente als collection

const query = document.querySelector(".classname");//gibt das erste passende element, class oder id (null wenn kein treffer)

const alleMitId = document.querySelectorAll("#id")//gibt alle passende elemente, class oder id (als nodelist)
//node list hat mehr functions und updated nicht automatisch, wenn ich was ändert


//.firstelementchild

let firstChild = element.firstElementChild;//gibt das erste direkt untergeordnete element
let lastChild = element.lastElementChild;//gibt das letzte direkt untergeordnete element

element.nextElementSibling//gibt das nächste element der selben stufe
element.previousElementSibling//gibt das vorhärige element der selben stufe

element.parentElement//gibt das übergeordnete element

element.children//gibt alle untergeordneten elemente als collection


//------------ NODE LISTS---------------------
//.map , .filter , .reduce gehen nicht, aber foreach geht

let neueNodeList = document.querySelectorAll(".buttons");//alle mit .exampleClass

neueNodeList.forEach(element=>{

    element.style.backgroundColor = "green";

    element.addEventListener("click",event =>{//so kann man zu jedem einen eventlistender hinzufügen
        event.target.style.backgroundColor = "red"
    })
})

// element zu nodelist hinzufügen

const newButton = document.createElement("button");
newButton.textContent ="neuer Button";
newButton.classList ="buttons";//gewählte class für querySel.
document.body.appendChild(newButton);//fügt am ende der DOM hinzu
neueNodeList = document.querySelectorAll(".buttons");//updaten um den neuen button zur liste hinzu zufügen


//element Entfernen


//vom DOM
neueNodeList.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        neueNodeList = document.querySelectorAll(".buttons");//updaten um remove() zu übernehmen
    })
})
