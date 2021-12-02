import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development";
const DropdownMenu = () =>{
    const [isActive,setIsActive] = useState(false)

    return(
    <div className="dropdown-menu">
        <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>
            <p>Filter by Region</p>
            <button><i className="fas fa-angle-down"></i></button>
        </div>
        {isActive && (
            <ul>
               <li><Link className="dropdown-link" to="/africa">Africa</Link></li>
               <li><Link className="dropdown-link" to="/america">America</Link></li>
               <li><Link className="dropdown-link" to="/asia">Asia</Link></li>
               <li><Link className="dropdown-link" to="/europe">Europe</Link></li>
               <li><Link className="dropdown-link" to="/oceania">Oceania</Link></li>
           </ul>
        )}
    </div>
    );
}
export default DropdownMenu;