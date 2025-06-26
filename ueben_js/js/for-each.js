let numbers1 = [1,2,3,4,5,6,7,8];
const numbers2 = [1,2,3,4,5,6,7,8];


function display(element, index,array) {
    console.log(element)
}

function double(element) {
    return element *2;
}

numbers1.forEach(double);//inputs elemente, indexe und array seperate für jede instance in die funktion
numbers1.forEach(display);


    //.map

//selbes wie forEach, das ergebnis überschreibt aber nicht das array
console.log(numbers2.map(double));

numbers2.forEach(double);//geht nicht da numbers2 const ist 
console.log(numbers2);


const dates = ["2025-01-20","2025-01-15","2025-02-17"];
const formatedDates = dates.map(reformatDate);

//formatiert dates zu dormatedDates
function reformatDate(element) {
    const parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

console.log(formatedDates);



    //.filter()

//lässt alle elemente die die false returnen aus einem array entfernen
let numbers3 = [1,2,3,4,5,6,7,8,9,0];
let evenNumbers3 = numbers3.filter(isEven);
let oddNumbers3 = numbers3.filter(isOdd);

console.log(evenNumbers3);
console.log(oddNumbers3);


function isEven(element) {
    return element % 2 == 0;
}
function isOdd(element) {
    return element % 2 != 0;
}



    //.reduce()

//lässt einen ein array zu einem einzelwert zusammen fassen
const prices = [5,20,17,81,20];
const totalCost = prices.reduce(summe);
const maxCost = prices.reduce(getMax);

console.log(totalCost);
console.log(maxCost);

function summe(sumOfPreviousElements, nextElement) {
    return sumOfPreviousElements +nextElement;
}
function getMax(sumOfPreviousElements, nextElement) {
    return Math.max(sumOfPreviousElements,nextElement);
}