const checkbox1 = document.getElementById("checkbox1");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const submit1 = document.getElementById("submit1");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

submit1.onclick = function(){

    //als if

/*
    if(checkbox1.checked){
        result1.textContent = "Checkbox gedrückt!"
    }
    else{
        result1.textContent = "Checkbox nicht gedrückt!"
    }

    if(radio1.checked){
        result2.textContent = "radio 1 gewählt!"
    }
    else if(radio2.checked){
        result2.textContent = "radio 2 gewählt!"
    }
    else if(radio3.checked){
        result2.textContent = "radio 3 gewählt!"
    }
    else{
        result2.textContent = "kein radio gewählt!"
    }
*/
    //als ternary operatoren BESTE OPTION

/*
checkbox1.checked ? result1.textContent = "Checkbox gedrückt!" : 
        result1.textContent = "Checkbox nicht gedrückt!";
    radio1.checked ? result2.textContent = "radio 1 gewählt!": null ;
    radio2.checked ? result2.textContent = "radio 2 gewählt!": null ;
    radio3.checked ? result2.textContent = "radio 3 gewählt!": null ;
    !radio1.checked && !radio2.checked && !radio3.checked ? 
        result2.textContent = "kein radio gewählt!": null ;

*/

    //als switch (past nicht ganz da kein else)
/*
    switch (true) {
        case checkbox1.checked: result1.textContent = "Checkbox gedrückt!";break;
        case radio1.checked: result2.textContent = "radio 1 gewählt!";break;
        case radio2.checked: result2.textContent = "radio 2 gewählt!";break;
        case radio3.checked: result2.textContent = "radio 3 gewählt!";break;
        default:result2.textContent = "keine option gewählt gewählt!";break;
    }
*/
}
