let fruits = ["apfel","orange","banane"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

fruits[0] = "birne";//ersätz "apfel"(also index 0) mit "birne"
console.log(fruits[0])


fruits.push("apfel");//fügt "apfel" am ende des arrays hinzu
fruits.pop();//löscht den eintag am ende des arrays
fruits.unshift("tomate");//fügt "tomate" am anfang des arrays hinzua
fruits.shift();//löscht den eintag am anfang des arrays

console.log(fruits.length);//anzahl der früchte
console.log(fruits)

console.log(fruits.indexOf("birne"));//gibt den index von "birne" steht (-1 wenn nicht vorhanden)

for (let i = 0; i < fruits.length; i++) {//von vorne nach hinden
    console.log(fruits[i]);
}
for (let i = fruits.length-1; i >= 0 ; i--) {//von hinden nach vorne
    console.log(fruits[i]);   
}

console.log(fruits.sort());//abc sortiert
console.log(fruits.sort().reverse());//cba sortiert

for(let fruit of fruits){//kompakt vorwärts
    console.log(fruit);
}

let numbers = [1,2,3,4,5,6];
let max = Math.max(...numbers);// ... schaut auf jede iteration (z.b. 1,2 usw.)eizeln
let min = Math.min(...numbers);
console.log(max)
console.log(min)

let vollerName = "Levi Post";
let letters = [...vollerName]//... lässt einen Chars trennen
console.log(letters);
let VollerName2 = letters.join("-");//lässt einen die Chars zusammen sätzen und etwas einsentzen
console.log(VollerName2)

let nums1 = [1,2,3,4];
let nums2 = [4,5,3,1];
let nums = [...nums1, ...nums2];//so kann man mehrere arrays zusammen fügen
console.log(nums);


function openFridge(lightOn,...foods) {//undefinirte anzahl am einträgen (nach den ... können keine weiteren Parameter kommen)
    lightOn ? console.log("light turns on"):null;
    console.log(foods);
}
openFridge("true","cheese","steak")


food1 = "steak";
food2 = "steak";
food3 = "steak";
function intoArray(...foods){//macht seperate werte in ein array
    return foods;
}
console.log(intoArray(food1,food2,food3));


function summe(...numbers) {//summe funktion

    let result =0;
    for (const number of numbers) {//zählt alle zahlen zusammen
        result = result + number;
    }
    return result;
}
console.log(summe(1,2,3,7));

function getAverage(...numbers) {//summe funktion

    let result =0;
    for (const number of numbers) {//zählt alle zahlen zusammen
        result = result + number;
    }
    return result /numbers.length;//teilt durch anzahl
}
console.log(summe(1,2,3,8));
console.log(getAverage(1,2,3,8));



//sorting arrays

const numbers2 = [1,3,7,2,4,9,8,6,5];

numbers2.sort((a,b)=>a-b);
console.log(numbers2);

const people = [
    {name:"1",age:18,isStudent:true},
    {name:"2",age:29,isStudent:false},
    {name:"3",age:50,isStudent:false},
    {name:"4",age:3,isStudent:false},
]
people.sort((a,b) => a.age -b.age);
console.log(people);


//sorting arrays alphabetisch

const people2 = [
    {name:"1",age:18,isStudent:true},
    {name:"2",age:29,isStudent:false},
    {name:"3",age:50,isStudent:false},
    {name:"4",age:3,isStudent:false},
]

people2.sort((a,b) => a.name.localeCompare(b.name))
console.log(people2);



//shuffleing a array

const cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];


function shuffle(array) {
    for (let i = array.length - 1;i > 0;  i--) {
        const random = Math.floor(Math.random()*(i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}
shuffle(cards);

console.log(cards)