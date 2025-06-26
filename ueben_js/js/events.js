const box = document.getElementById("box");
//const myBtn = document.getElementById("myButton");

//---------------MOUSE EVENTS----------------------
box.addEventListener("click",(event)=>{ //click
    console.log(event);
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch"}
    );
box.addEventListener("mouseover", (event)=>{//hover beginnt
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "bitte nicht";
    
})
box.addEventListener("mouseout",(event)=>{//hover endet
    event.target.style.backgroundColor = "greenyellow";
    event.target.textContent = "click mich";
});
//myBtn.addEventListener("click",(event)=>{
//    box.style.backgroundColor ="green";
//    box.textContent ="danke!";
//})

//---------KEY EVENTS------------


const moveAmount = 25;
let x = 0;
let y = 0;
document.addEventListener("keydown",(event)=>{//sollange wie gehalten wird wiederholt sich jeden tick
    event.preventDefault();//verhindert scrollen per arrow keys

    let key = event.key; //gedrückter key
    if (key.startsWith("Arrow")) {
        switch (key) {
            case "ArrowUp": y -= moveAmount;break;
            case "ArrowDown": y += moveAmount;break;
            case "ArrowRight": x += moveAmount;break;
            case "ArrowLeft": x -= moveAmount;break;
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
})

document.addEventListener("keyup",(event)=>{//feuert im loslass moment
    let key = event.key;//losgelassender key 
    document.body.style.backgroundColor = "white";
})

