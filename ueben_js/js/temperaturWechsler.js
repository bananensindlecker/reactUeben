const tempIn = document.getElementById("tempIn");
const toC = document.getElementById("to°C");
const toF = document.getElementById("to°F");
const output = document.getElementById("output");
let temp;



function Umwandeln() {
    
        if (toC.checked){
            temp = Number(tempIn.value);
            temp = temp *9/5 +32;
            output.textContent = temp.toFixed(1)+"°C";
        }
        else if (toF.checked){
            temp = Number(tempIn.value);
            temp = (temp -32)*(5/9);
            output.textContent = temp.toFixed(1)+"°C";
        }
        else{
            output.textContent = "Keine valide eingabe!";
        }
}
