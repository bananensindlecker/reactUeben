import { useState } from "react"

function Counter() {
    const [count, setCount] = useState<number>(0);

    const UpdateCounter = (input:number)=>{
        input !=0 ? setCount(prevCount => prevCount + input/*IST DIES KEINE => FUNC. WIRD NICHT DIREKT GEUPDATED */):setCount(0);
    }


    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>UpdateCounter(1)}>Erhöhen</button>
            <button onClick={()=>UpdateCounter(0)}>Zurücksetzen</button>
            <button onClick={()=>UpdateCounter(-1)}>Senken</button>
        </div>
    )
}
export default Counter