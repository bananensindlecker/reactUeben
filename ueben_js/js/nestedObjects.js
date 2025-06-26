const person1 ={
    firstName: "1",
    lastName: "2",
    age: 18,
    isStudent: true,
    hobbies: ["Coden","Gaming","IT"],
    address:{//object in object
        postalCode: 28870,
        town: "1",
        street: "2",
        houseNr: 3,
        houseNrAdd: "4",
        country: "5"
    }
}

console.log(person1.age);
console.log(person1.address.street);//object in einem object aufrufen

for (const property in person1.address) {
    console.log(person1.address[property])
}

//object in object mit constructor und class erstellen
class Address{   
    constructor(postalCode,town,street,houseNr,houseNrAdd,country){
        this.postalCode =postalCode;
        this.town = town;
        this. street = street;
        this.houseNr =houseNr;
        this.houseNrAdd = houseNrAdd;
        this.country = country;
    }
}

class Person{
    constructor(firstName,lastName,age,isStudent,hobbies,postalCode,town,street,houseNr,houseNrAdd,country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
        this.hobbies = hobbies;
        this.address = new Address(postalCode,town,street,houseNr,houseNrAdd,country);
    }
}

const person2 = new Person("1","2",50,false,["golfen","fußball schauen","rauchen"],4,"3","5 6",25,"b","1");

console.log(person2.address);


//objects in arrays

const fruits = [
    {name:"apfel",color:"rot",calories:"95"},
    {name:"birne",color:"grün",calories:"105"},
    {name:"pfirsich",color:"rot-gelb",calories:"125"},
    {name:"banane",color:"gelb",calories:"105"},
    {name:"erbeere",color:"rot",calories:"95"},
]
//neues object hinzufügen
fruits.push({name:"weintraube",color:"purpur",calories:"95"});

fruits.pop();//löscht letztes object

console.log(fruits[0].name);//aus array objecte auslesen

//foreach
fruits.forEach(fruit => console.log(fruit.name));

//mappen
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

//filtern
const yellowFruits = fruits.filter(fruit => fruit.color ==="gelb");
console.log(yellowFruits);

//reducen

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //fruit mit den meisten calories