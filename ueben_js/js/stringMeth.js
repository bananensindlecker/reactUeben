
let string1 = "LangerString               ";

console.log(string1.charAt(0));
console.log(string1.indexOf("g"));//erstes vorkommen
console.log(string1.lastIndexOf("g"));//letztes vorkommen
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.startsWith("L"));



console.log(string1.length);
let string2 = string1.trim();//.trim() kürzt alle leertasten
console.log(string2.length);

console.log(string1.startsWith("L"));//schaut nach erstem buchstaben (Case sensitive)
console.log(string1.endsWith(" "));//schaut nach letztem buchstaben (Case sensitive)
console.log(string1.includes("r"));//schaut nach allen buchstaben (Case sensitive)
let string3 = string1.replaceAll("L","l");
console.log(string3);


let string4 = "12345789";
console.log(string4.padStart(20, "0"));//füllt anfang mit0 bis länge == 20
console.log(string4.slice(0));//von vorne gezählt
console.log(string4.slice(-2));//von hinten gezählt
console.log(string4.slice(2,4));//bereich in der mitte (hintere zahl exklusiv)

//namen trenner
let fullName = "Levi Post";
fullName = fullName.trim()
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

//methode chain (Mehrere Methoden in einer zeile)
let username = "  erDbeerbaerchenX  ";
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);