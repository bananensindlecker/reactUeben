//normale def

function hallo1(name) {
    console.log("hallo "+name);
}
hallo1("1");

//arrow def

const hallo2 = (name) => console.log("hallo "+name);

hallo2("2");


//arrow def für mehrere aktionen

const hallo3 = (name,age) => {
    console.log("hallo "+name); 
    console.log("du bist "+age+" Jahre Alt")
    }

hallo3("Opa", 84);

//arrow def als callback für arrays

const numbers =[1,2,3,4,5,6,7,8,9];

const numbersSquared = numbers.map((element) => Math.pow(element,2));
console.log(numbersSquared);

const evenNumbers = numbers.filter((element) => element % 2 == 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter((element) => element % 2 == 1);
console.log(oddNumbers);
