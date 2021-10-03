import Country from './Country'
const Countries = ({ countries }) =>{
   
    return(
    <div className="wrapper">
        {countries.map((country)=> <Country key={country.alpha2Code} country={country} />)}
    </div>
    );
}

export default Countries