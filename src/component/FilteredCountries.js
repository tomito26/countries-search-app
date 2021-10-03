const FilteredCountries = () =>{
    return(
    <div className="menu">
        <p>Filter by Region</p>
        <div className="dropdown-menu">
            <button><i className="fas fa-angle-down"></i></button>
            <ul>
                <li><a href="#africa">Africa</a></li>
                <li><a href="#america">America</a></li>
                <li><a href="#asia">Asia</a></li>
                <li><a href="#europe">Europe</a></li>
                <li><a href="#oceania">Oceania</a></li>
            </ul>
        </div>
    </div>)
}
export default FilteredCountries