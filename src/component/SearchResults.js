import countrySearch from "./countrySearch";
const SearchResults = ({ results,searchItem,countries }) =>{
   console.log(searchItem)
   console.log(countries)

    return(
    <div className="search-results">
        {countries.map(country => <countrySearch  country={country} />)}
        

    </div>
    );
}

export default SearchResults;