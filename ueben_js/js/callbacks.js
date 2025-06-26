

showHallo(showSchuess/*<- wird nach beendung ausgeführt */);



function showHallo(callback) {
    console.log("Hallo")
    callback();//führt die def funktion (showSchuess) aus, nachdem showHallo fertig ist
}
function showSchuess() {
    console.log("Schüss")
}

//verhindert, das Funktionen in der nicht vorgesehenden reinfolge gecalled werden



//--------------CALLBACK HELL----------------- besser nicht nutzen über 4 stufen

function task1(callback) {
    setTimeout(()=>{//semuliertes delay
        console.log("task 1 complete");
        callback();
    },2000)
    
}
function task2(callback) {
    setTimeout(()=>{//semuliertes delay
        console.log("task 2 complete");
        callback();
    },1000)
    
}
function task3(callback) {
    setTimeout(()=>{//semuliertes delay
        console.log("task 3 complete");
        callback();
    },3000)
    
}
function task4(callback) {
    setTimeout(()=>{//semuliertes delay
        console.log("task 4 complete");
        callback();
    },500)
    
}

//task1();
//task2();
//task3();
//task4();
//console.log("all done 1");

//so wird in rein folge ausgeführt
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all done");
            })
        })
    })
});

