import { Link } from "react-router-dom";

function NavBar() {
    
    return(
        <>
            <Link to="/">               <button>Home                 </button></Link>
            <Link to="/about">          <button>über uns             </button></Link>
            <Link to="/editProgram">    <button>Programme bearbeiten </button></Link>
            <Link to="/loadProgram">    <button>Programme ausführen  </button></Link>
        </>
    )
}
export default NavBar;