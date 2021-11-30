import AmericanCountry from './AmericanCountry'
const America = ({ countries }) =>{
    console.log(countries)
    return(
    <div className="wrapper-container">
        <h2 className="wrapper-header">American Countries</h2>
        <div className="wrapper">
            {countries.filter(americanCountry => americanCountry.region === "Americas").map(country=><AmericanCountry country={country}/>)}
        </div>

    </div>
    );
}

export default America;