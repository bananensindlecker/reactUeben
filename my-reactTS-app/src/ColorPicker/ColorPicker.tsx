import React, { useState } from "react";
import styles from "./ColorPicker.module.css"


interface Color{
    defaultColor?:string
}


function ColorPicker({defaultColor}:Color) {
    const [color,setColor]=useState<string>(defaultColor?defaultColor:"#ffffff");

    function handelColorChange(e:React.ChangeEvent<HTMLInputElement>){
        const target = e.target as HTMLInputElement;
        setColor(target.value as string);
    }

    return(
        <div className={styles.colorPicker}>
            <h2>Color Picker</h2>
            <div className={styles.colorDisplay}>
                <p style={{backgroundColor: color}}>Gewälte Farbe:{color}</p>
            </div>
            <label>Wähle eine Farbe:</label>
            <input type="color" value={color}onChange={handelColorChange}/>

        </div>
    )

}
export default ColorPicker