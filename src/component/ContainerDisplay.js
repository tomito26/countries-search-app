import SearchCountryForm from './SearchCountryForm';
import DropdownMenu from './DropdownMenu';

const ContainerDisplay = ({ searchCountry }) =>{
    return(
    <div className="container">
        <SearchCountryForm searchCountry={searchCountry}/>
        <DropdownMenu />
    </div>
    );
}
export default ContainerDisplay