import { Link } from "react-router-dom";

const Header = () =>{
    return(
    <header>
        <nav>
            <h3><Link className="nav-link" to="/">Where in the world?</Link></h3>
            <p>
                <i className="far fa-moon"></i>
                <span>Dark Mode</span>
            </p>
            
        </nav>
    </header>
    );
}

export default Header