

//----------ALS CALLBACK HELL

function feedCat1(callback) {
    setTimeout(() => {
        console.log("Cat is feed");
        callback();
    }, 1500);
}
function clean1(callback) {
    setTimeout(() => {
        console.log("everything is cleaned");
        callback();
    }, 2500);
}
function takeOutTrash1(callback) {
    setTimeout(() => {
        console.log("trash is in the bin");
        callback();
    }, 500);
}

//feedCat1(()=>{
//    clean1(()=>{
//        takeOutTrash1(()=>{
//            console.log("all done")
//        })
//    })
//})


//----------PROMISES

function feedCat2() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const catFeed = true;
            catFeed == true ? resolve("Cat is feed"): reject("Cat not feed");
    }, 1500);
    })
}
function clean2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = true;
            cleaned == true ?resolve("everything is cleaned"):reject("you didnt clean");
    }, 1500);
    })
}
function takeOutTrash2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOutside = true;
            trashOutside == true ?resolve("trash is in the bin"):reject("trash isnt in the bin");
    }, 1500);
    })
}

//als promise chain
//für performance aus commented
/*
feedCat2()
    .then(value=>{console.log(value); return clean2()})//logged den resolve und startet die nächste fuction
    .then(value=>{console.log(value); return takeOutTrash2()})//logged den resolve und startet die nächste fuction
    .then(value=>{console.log(value); console.log("all is done")})//logged den resolve und startet die nächste fuction
    .catch(error => console.error(error))//logged mögliche rejects, code nach dem reject wird nicht ausgeführt
*/

//------------ASYNC--------

async function doChores() {//async erlaubt await
    try {
        const feedCatResult = await feedCat2();//await pausiert die function bis es eine antwort bekommt
    console.log(feedCatResult);

    const cleanResult = await clean2();//await pausiert die function bis es eine antwort bekommt
    console.log(cleanResult);

    const takeOutTrashResult = await takeOutTrash2();//await pausiert die function bis es eine antwort bekommt
    console.log(takeOutTrashResult);

    console.log("all chores done")
    } catch (error) {//sollte etwas rejecten wird ein error geworfen
        console.log(error);
        console.log("stopping function");
    }
    
    
}
doChores();