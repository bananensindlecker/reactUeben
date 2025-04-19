import { useState } from "react";


function TestingArrayUseState(){
    const [foods,setFoods]=useState<Array<string>>(["Pizza","Apfel","Gurke"])

    function HandelAddFood() {
        const newFoodId = document.getElementById("foodInput1")as HTMLInputElement;
        const newFood = newFoodId.value;
        
        newFood != ""?setFoods((f)=>[...f,newFood]):null;//fügt hinzu ohne zu ersetzen
        newFoodId.value ="";
    }

    function HandelRemoveFood() {
        const removeFoodId =document.getElementById("foodInput2") as HTMLInputElement;
        const removeFood = removeFoodId.value;
        const removeFoodIndex = foods.indexOf(removeFood);

        setFoods((f) => f.filter((_, indexOfElement) => indexOfElement != removeFoodIndex))
        removeFoodId.value =""
    }


    return(
        <div>
            <h2>Liste an Lebensmitteln</h2>
            
            <input type="text" id="foodInput1" placeholder="Weiteres Essen:"></input>
            <button onClick={HandelAddFood}>Essen Hinzufügen</button><br/>
            <input type="text" id="foodInput2" placeholder="Zu entfernendes Essen:"></input>
            <button onClick={HandelRemoveFood}>Essen Entfernen</button>
            <ul>
                {foods.map((food,index)=><li key={index}>{food}</li>)}
            </ul>
        </div>
    )
}
export default TestingArrayUseState;