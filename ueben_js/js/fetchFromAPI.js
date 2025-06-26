
const mySubmit = document.getElementById("mySubmit");
const userIn = document.getElementById("userIn");
const displayPokemon = document.getElementById("pokemonImg");



async function fetchData() {
    try {
        const pokemonName = userIn.value.toLowerCase();
        const url =  "https://pokeapi.co/api/v2/pokemon/"+pokemonName;
        const reponse = await fetch(url);
    
        if (!reponse.ok){
            throw new Error("etwas ist beim fetch schief gelaufen!");
        }
        const data = await reponse.json();
        console.log(data);
        const pokemonImg =  data.sprites.front_default;
        displayPokemon.src = pokemonImg;
        displayPokemon.style.display = "block";
        
    }
     catch (error) {
        console.log(error)
    }
}
