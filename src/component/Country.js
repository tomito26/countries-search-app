import { Link } from "react-router-dom";
const Country = ({ country }) =>{
    
    return(

    <Link className="card-link"  to={`/${country.name}`} >
        <div className="card">
            <img src={country.flag} alt={`${country.name}'s flag'`}/>
            <div className="card-body">
                <h2>{country.name}</h2>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital:<span>{country.capital}</span></p>
            </div>
        </div>
    </Link>
    );
};

export default Country