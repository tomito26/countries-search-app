import { Link } from "react-router-dom"
const FilteredCountries = () =>{
    return(
    <div className="menu">
        <p>Filter by Region</p>
        <div className="dropdown-menu">
            <button><i className="fas fa-angle-down"></i></button>
            <ul>
                <li><a className="dropdown-link" href="/africa">Africa</a></li>
                <li><a className="dropdown-link" href="/america">America</a></li>
                <li><a className="dropdown-link" href="/asia">Asia</a></li>
                <li><a className="dropdown-link" href="/europe">Europe</a></li>
                <li><a className="dropdown-link" href="/oceania">Oceania</a></li>
            </ul>
        </div>
    </div>)
}
export default FilteredCountries