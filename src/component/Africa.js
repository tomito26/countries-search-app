import AfricanCountry from "./AfricanCountry";


const Africa = ({countries}) => {
    console.log(countries)
    return(
    <div className="wrapper-container">
        <h2 className="wrapper-header">African Countries</h2>
        <div className="wrapper">
            { countries.filter(africanCountries=> africanCountries.region === "Africa" )
            .map(country => <AfricanCountry country={country}/>) } 
        </div>
    </div> 
    );
}
export default Africa;