import Country from './Country'
const Countries = ({ countries }) =>{
    console.log(countries)
    return(
    <div className="wrapper">
        {countries.map((country)=> <Country key={country.alphacode} country={country} />)}
    </div>
    );
}

export default Countries