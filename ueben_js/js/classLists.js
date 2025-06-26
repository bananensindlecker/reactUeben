//class list -> CSS class
const myBtn = document.getElementById("myBtn");
myBtn.classList.add("cool");//fügt eine class hinzu
myBtn.classList.add("cool2");//fügt eine zweite class hinzu
myBtn.classList.replace("cool","cool1");//ersetz eine class nicht alle
myBtn.classList.remove("cool2");//entfernt eine (oder alle wenn leer)class
const hasCool1 = myBtn.classList.contains("cool1");//checked nach class cool1
console.log(hasCool1);