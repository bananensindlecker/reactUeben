
//object manuell erstellen
const person1 = {
    firstName: "1",
    lastName: "2",
    age: 18,
    isStudent: true,    
    sayHello: function(){console.log("Hallo ich bin "+this.firstName)},
    sayAge: function(){console.log("ich bin "+this.age+" Jahre alt")},
}

const person2 = {
    firstName: "1",
    lastName: "2",
    age: 29,
    isStudent: false,    
    sayHello: function(){console.log("Hallo ich bin "+this.firstName)},
    sayAge: function(){console.log("ich bin "+this.age+" Jahre alt")},
}



console.log(person1.firstName);
console.log(person2.firstName);

person1.sayHello();
person1.sayAge();

person2.sayHello();
person2.sayAge();


//als constructor
function Person(firstName,lastName,age,isStudent){
    this.firstName =firstName,
    this.lastName =lastName,
    this.age = age,
    this.isStudent = isStudent,
    this.sayHello = function(){console.log("Hallo ich bin "+ this.firstName)},
    this.sayAge = function(){console.log("ich bin "+ this.age+" Jahre alt")}
}

const person3 = new Person("1","2",50,false);

console.log(person3);
person3.sayHello();
person3.sayAge();



//als class:
class Car{
    constructor(name,cost,kmh,ps){
        this.name =name;
        this.cost =cost;
        this.kmh =kmh;
        this.ps =ps;
    }

    displayCar(){
        console.log("Der "+this.name+" kann "+this.kmh+" km/h fahren und hat "+this.ps+" PS");
        console.log("er kostet "+this.cost+"$ (+ Steuern)");
    }

    calcTax(mwSt){
        return "der "+this.name+" kostet insgesamt: "+this.cost *(mwSt+1) +"$";
    }

    //static gehört der class (Car) und nicht den objecten (car1,car2, usw)
    static address = "1 2. 3";

}
const mwSt = 0.19; 

const car1 = new Car("Benz","20000","220","300");
const car2 = new Car("Porsche","60000","310","400");

car1.displayCar();
console.log(car1.calcTax(mwSt));

car2.displayCar();
console.log(car2.calcTax(mwSt));


//statics:
class MathUtil{
    static PI =3.14;

    static getDiameter(radius){
        return radius *2;
    }

    static getCircumference(radius){
        return 2 *this.PI *radius;
    }
    static getArea(radius){
        return this.PI * radius *radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(4));
console.log(MathUtil.getCircumference(4));
console.log(MathUtil.getArea(4));



class User{
    static userCount = 0;

    constructor(username, password){
        this.username = username;
        this.password = password;
        User.userCount++;
    }

    static getUserCount(){
        return "es sind "+User.userCount+" nutzer regiestriert";
    }

    sayHello(){
        return "Hallo ich bin User "+this.username;
    }
}

const user1 = new User("Beere1",1234);
const user2 = new User("Beere2",1234);
const user3 = new User("Beere3",1234);
const user4 = new User("Beere4",1234);

console.log(user1.username);
console.log(user1.sayHello());

console.log(User.getUserCount());


//inheritence +super 

class Animal{
    constructor(name,age,speed){
        this.name =name;
        this.age = age;
        this.speed =speed;
    }
    alive = true;

    sleep(){
        return this.name+" ist am schlafen";
    }

    move(speed){
        return this.name+" bewegt sich mit "+speed+" km/h";
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age,speed);//schickt die werte in den constructor der Animal class
    }
    food = "Fleisch";

    run(){
        return super.move(this.speed)
    }
}


class Rabbit extends Animal{
    constructor(name,age,speed){
        super(name,age,speed);//schickt die werte in den constructor der Animal class
    }
    food = "Rübe";

    hopps(){
        return this.name+" hoppst "+this.speed+" km/h schnell";
    }
}


class Hawk extends Animal{
    constructor(name,age,speed,flySpeed){
        super(name,age,speed);
        this.flySpeed = flySpeed;//Weitere sonder werte können in den jeweilligen constructor
    }
    food ="Fleisch";

    hopps(){
        return super.move(this.speed)
    }

    fly(){
        return super.move(this.flySpeed)
    }
}



const dog1 = new Dog("Snow",3,20);
const hawk1 = new Hawk("Fastfuck",2,5,70);
const rabbit1 = new Rabbit("snowball",1,20);

console.log(dog1.name);
console.log(dog1.alive);
console.log(dog1.run());


console.log(hawk1.fly());
console.log(hawk1.hopps());


//Date objects
//speicher ein datum im format jahr-monat-tag-stunde:minute:sekunde:millisekunde
const date = new Date();
const date2 = new Date(2025,0/*januar da index 0*/,15,2/*Auch index 0*/,20,20,10);
const date3 = new Date("2025-04-01T06:00:00Z");

//geht auch mit monaten, tagen, usw.
const year = date.getFullYear();
const yearsSince1900 = date.getYear();

date2.setFullYear(2099);

console.log(date);
console.log(date2);
console.log(date3);
console.log(year);
console.log(yearsSince1900);
