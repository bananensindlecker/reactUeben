
//function declaration
function hallo() {
    console.log("Hallo");
}

//function expression

const getHallo = function hallo2() {
    console.log("Hallo");
    
}

    //auscommentiert, da timeout freezed
//setTimeout(getHallo, 3);
////das selbe ^, wie:
//setTimeout(function() {console.log("Hallo");},3);


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const evenNumbers =numbers.filter(function (element) {return element % 2 == 0;});
const oddNumbers = numbers.filter(function (element) {return element % 2 == 1;});
const summeNumbers = numbers.reduce(function (prevElement, nextElement) {return prevElement + nextElement;})

console.log(evenNumbers);
console.log(oddNumbers);
console.log(summeNumbers);