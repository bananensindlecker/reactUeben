import styles from './Button.module.css'


function Button() {

    let count:number =0;
    const handelClick =(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if (count < 3) {
            count++;
            console.log("ich wurde "+count+" mal geclicked");
        } 
        else{
            const input =e.target as HTMLElement;//so erkennt ts das HTML Element als solches
            input.textContent = "ouch!";
        }
    }
    const handelDoubleClick = ()=>{
        console.log("geh Doppel Clicked");
    }


    return(
    <button className={styles.button} onDoubleClick={handelDoubleClick} onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handelClick(e)/*als arrow function um direktes ausführen zu verhindern */}>click mich!</button>   
    )
}

export default Button;