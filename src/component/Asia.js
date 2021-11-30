import AsianCountry from "./AsianCountry";

const Asia = ({ countries }) =>{
    console.log(countries)
    return(
    <div className="wrapper-container">
        <h2 className="wrapper-header">Asian Countries</h2>
        <div className="wrapper">
            {countries.filter(asianCountries => asianCountries.region === "Asia").map(country => <AsianCountry key={country.alpha2Code} country={country}/>)}
        </div>
    </div>
    );
}

export default Asia;