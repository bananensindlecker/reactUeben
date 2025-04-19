import discord_icon from "../assets/discord_icon.png"

interface Props{
    name:string;
    age:number;
    info:string;
}

function MakerCard({name, age, info}:Props) {
    
    return(
        <div className="card">
            <img alt="Profil Bild" src={discord_icon}></img>
            <h2>{name}</h2>
            <p>Alter: {age}</p><br/>
            <p>{info}</p>
        </div>
    )
}
export default MakerCard
