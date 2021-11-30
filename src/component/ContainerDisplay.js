import SearchCountryForm from './SearchCountryForm';
import FilteredCountries from './FilteredCountries';

const ContainerDisplay = ({ searchCountry }) =>{
    return(
    <div className="container">
        <SearchCountryForm searchCountry={searchCountry}/>
        <FilteredCountries />
    </div>
    );
}
export default ContainerDisplay