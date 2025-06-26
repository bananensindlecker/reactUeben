
function getNewPassword() {
const length = document.getElementById("lenght").value;
const lowerCase = document.getElementById("lowerCase").checked;
const upperCase = document.getElementById("upperCase").checked;
const numbers = document.getElementById("numbers").checked;
const chars = document.getElementById("chars").checked;
const passOut = document.getElementById("passOut");

const lowerCaseSet ="abcdefghijklmnopqrstuvwxyz";
const upperCaseSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "12234567890";
const charSet = "-_&%$?!()/=[]ß><+*#@"

let allowedChars = "";
let password = "";

allowedChars += lowerCase ? lowerCaseSet : "";
allowedChars += upperCase ? upperCaseSet : "";
allowedChars += numbers ? numbersSet : "";
allowedChars += chars ? charSet : "";
console.log(allowedChars);

if (length <= 0) {
    passOut.textContent ="ungültige Password Länge";
    return null;
} 
if(allowedChars.length === 0){
    passOut.textContent = "ungültige Kompositions auswahl"
    return null;
}
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password +=allowedChars[randomIndex];
}
passOut.textContent = password;

}