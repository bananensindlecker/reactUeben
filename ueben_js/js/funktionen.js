
function testFunktion(name, alter) {
    console.log(`testFunktion läuft mit name ${name} und alter ${alter}`);
    
}

testFunktion("1",18);
testFunktion("2", 29);

function add(x,y){
    let result = x + y;
    return result;//schickt eine antwort zum ort des calls
}
let result1 =add(2,3);//hier wird gecalled
console.log(result1);
