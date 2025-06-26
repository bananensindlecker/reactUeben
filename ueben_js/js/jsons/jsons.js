
fetch('http://127.0.0.1:5500/js/jsons/person.json')//es sollte auch relativer path gehen, tut es aber nicht (link geht aber)
    .then(response => response.json())
    .then(value=> console.log(value))
    .catch(error=>console.log(error));



    const names = ["Levi","Britta","Jörg"];

const jsonString = JSON.stringify(names);//macht arrays oder objects in ein langes string für json
console.log(names);
console.log(jsonString);

const jsArray =JSON.parse(jsonString);

console.log(jsArray);//macht ein json array oder object in ein js array oder object

