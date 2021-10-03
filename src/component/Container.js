import SearchCountryForm from './SearchCountryForm';
import FilteredCountries from './FilteredCountries';
const Container = () =>{
    return(
    <div className="container">
        <SearchCountryForm />
        <FilteredCountries />
    </div>
    );
}
export default Container