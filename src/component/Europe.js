import EuropeanCountry from "./EuropeanCountry";

const Europe = ({ countries }) =>{
    console.log(countries)
    return(
    <div className="wrapper-container">
        <h2 className="wrapper-header">European Countries</h2>
        <div className="wrapper">
            {countries.filter(europeanCountry => europeanCountry.region === "Europe").map(country => <EuropeanCountry key={country.alpha2Code} country={country}/>)}
        </div>

    </div>
    );
}
export default Europe;