import { useState } from "react"

interface Foods{
    name:string;
    calories:number;
    healthy:boolean;
}
function TestingArrayOfObjectsUseState() {
    const [foods, setFoods] =useState<Array<Foods>>(
        [   {name:"Apfel",calories:80,healthy:true},
            {name:"Birne",calories:60,healthy:true},
            {name:"Pizza",calories:170,healthy:false},
            {name:"Hamburger",calories:200,healthy:false},
        ])
    const [foodsName, setFoodsName]=useState<string>();
    const [foodsCalorie, setFoodsCalorie]=useState<number>();
    const [foodsHealthy, setFoodsHealthy]=useState<boolean>();

    function handelNameChange(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value as string;
        setFoodsName(value);
    }
    function handelCalorieChange(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value as unknown as number;
        setFoodsCalorie(value);
    }
    function handelHealthyChange(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.checked as boolean;
        setFoodsHealthy(value);
    }
    function HandelAddFood() {
        setFoods((f)=>[...f,{name:foodsName as string,calories:foodsCalorie as number,healthy:foodsHealthy as boolean}])
    }
    function removeFromFoods(index:number) {
        setFoods((f)=>(f.filter((_food,foodIndex)=>foodIndex != index )))

    }


    return(
        <div>
            <h2>Essens Opjekte:</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=>removeFromFoods(index)}>     Name: {food.name} | Kalorien: {food.calories} | Gesund: {food.healthy?"ja":"nein"}  </li>)}
            </ul>
            <h3>Neues Essen hinzufügen</h3>
            <form>
                <input type="text" id="nameIn" placeholder="Name:"onChange={(e)=>handelNameChange(e)}/><br/>

                <input type="number" id="caloriesIn" placeholder="Kalorien:"onChange={(e)=>handelCalorieChange(e)}/><br/>

                Gesund:<input type="checkbox" id="healthyIn"onChange={(e)=>handelHealthyChange(e)}/>
                
                <button type="button" id="updateFoods" onClick={()=>HandelAddFood()}>Hinzufügen</button>
            </form>
        </div>
    )
}
export default TestingArrayOfObjectsUseState

/*
    function handelNewFood(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const newNameIn = document.getElementById("nameIn")as HTMLInputElement ;
        const newName = newNameIn.value as string;
        const newCaloriesIn = document.getElementById("caloriesIn")as HTMLInputElement ;
        const newCalories = newCaloriesIn.value as unknown as number;
        const newHelthyIn = document.getElementById("healthyIn")as HTMLInputElement ;
        const newHealty =newHelthyIn.checked as boolean;

        if (newName =="" || newCalories == 0) {
            console.log("name: "+newName+" calories: "+newCalories);
        }else{
        setFoods((f)=>[...f,{name:newName,calories:newCalories,healthy:newHealty}])
        }
    }
        */