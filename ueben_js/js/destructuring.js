let a = 1;
let b = 2;

[a, b] = [ b, a]; //swapped den wert von a und b

console.log(a);
console.log(b);

const colors = ["red","green","blue","yellow","white","black"];

[colors[0],colors[2]] = [colors[2], colors[0]];//swapped zwei werte (red + blue) in einem array

console.log(colors[0]);
console.log(colors[2]);


//nimmt die werte aus colors von index 0 -> 3 und macht sie zu eigenden const var
const [firstColor, secondColor, thirdColor, ...extraColors/*macht ein array aus dem rest*/] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);



const person1 = {
    firstName:  "1",
    lastName: "2",
    age: 18,
    job: "Schüler"
}
const person2 = {
    firstName:  "1",
    lastName: "2",
    age: 29,
    job: "3"
}

const {firstName,lastName,age,job="arbeitslos"/*sollte job undefined sein arbeitslos*/} = person1;//lässt einen werte aus einem object nehmen

//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);


//{} lässt einen ein object einreichen und die eizelteile in der function verwenden
function displayPerson({firstName,lastName,age,job="Arbeitslos"}) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

displayPerson(person1);