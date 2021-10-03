import SearchCountryForm from './SearchCountryForm';
import FilteredCountries from './FilteredCountries';
const Container = ({ searchCountry }) =>{
    return(
    <div className="container">
        <SearchCountryForm searchCountry={searchCountry}/>
        <FilteredCountries />
    </div>
    );
}
export default Container