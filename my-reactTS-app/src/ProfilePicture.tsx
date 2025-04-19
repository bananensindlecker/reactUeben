import discord_icon from "./assets/discord_icon.png";


function ProfilePicture() {

    let checked:boolean=false;

    const handelClick = (e:React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
        
        const input = e.target as HTMLElement;
        if (!checked) {
            input.style.border ="3px dashed red";
            checked = true;
        }else{
            input.style.border="none";
            checked= false;
        }
    }


    return(
        <>
            <img src={discord_icon} onClick={(e:React.MouseEvent<HTMLImageElement, MouseEvent>)=>handelClick(e)}></img>
        </>
    )
}
export default ProfilePicture;