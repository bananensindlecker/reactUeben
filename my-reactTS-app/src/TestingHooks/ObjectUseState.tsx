import { useState } from "react"

interface Car{
    id:number;
    year:number;
    make:string;
    model:string;
}

function TestingObjectUseState() {
    const [car, setCar]=useState<Car>({id:1,year:2024,make:"Ford",model:"Mustang"});

    function handelCarChangeYear(e:React.ChangeEvent<HTMLInputElement>) {
        setCar(c=>({...c,year: e.target.value as unknown as number}))//alle werte werden von previous wert übernommen, ausßer die, die nach ...car def. werden(spreed operator)
        
    }
    function handelCarChangeMake(e:React.ChangeEvent<HTMLInputElement>) {
        setCar(c=>({...c,make:e.target.value}))
    }
    function handelCarChangeModel(e:React.ChangeEvent<HTMLInputElement>) {
        setCar(c=>({...c,model:e.target.value}))
    }



    return(
        <div>
            <p>Dein lieblings Auto ist der: {car.year} {car.make} {car.model} </p>
            <label htmlFor="YearIn">Baujahr</label>
            <input name="YearIn" type="number" value={car.year} onChange={(e) => handelCarChangeYear(e)}></input><br/>

            <label htmlFor="MakeIn">Hersteller</label>
            <input name="MakeIn" type="text" value={car.make} onChange={(e) => handelCarChangeMake(e)}></input><br/>

            <label htmlFor="ModelIn">Model</label>
            <input name="ModelIn" type="text" value={car.model} onChange={(e) => handelCarChangeModel(e)}></input><br/>
        </div>
    )
}
export default TestingObjectUseState