import OceaniacCountries from "./OceaniacCountries";

const Oceania = (countries) => {
    console.log(countries)
    return(
    <div className="wrapper-container">
        <h2 className="wrapper-header">Oceaniac Countries</h2>
        <div className="wrapper">
            {countries.countries.filter(oceaniacCountries => oceaniacCountries.region === "Oceania")
            .map(country => <OceaniacCountries key={country.alpha2Code} country={country}/>)}
        </div>
    </div>
    );
}
export default Oceania;