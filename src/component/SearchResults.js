
const SearchResults = ({ results }) =>{
   console.log(results)
    return(
    <div className="search-results">
        {results[0] === undefined ? "" : <img src={results[0].flag} alt={`${results[0].name}'s flag`} />}
        <div className="results-body">
            <h3>{results[0] === undefined  ? "" : results[0].name}</h3>
            <div className="details">
                <div className="detail-info">
                    <div className="search-info">
                        <p><span className="info-header">Native Name:</span><span className="info-body">{results[0] === undefined ? "" : results[0].nativeName}</span></p>
                        <p><span className="info-header">Population:</span><span className="info-body">{results[0] === undefined ? "" : results[0].population}</span></p>
                        <p><span className="info-header">Region:</span><span className="info-body">{results[0] === undefined ? "" : results[0].region}</span></p>
                        <p><span className="info-header">Sub Region:</span><span className="info-body">{results[0] === undefined ? "" : results[0].subregion}</span></p>
                        <p><span className="info-header">Capital:</span><span className="info-body">{results[0] === undefined ? "" : results[0].capital}</span></p>
                    </div>
                    <div className="more-info">
                        <p><span className="info-header">Top Level Domain:</span><span className="info-body">{results[0] === undefined ? "" : results[0].topLevelDomain}</span></p>
                        <p><span className="info-header">Currencies:</span><span className="info-body">{results[0] === undefined ? "" : results[0].currencies[0].name}</span></p>
                        <p><span className="info-header">Languages:</span><span className="info-body">{results[0] === undefined ? "" : results[0].languages.map(langauge=> `${langauge.name},`)}</span></p> 
                    </div>
                </div>
                {/* <p><span className="info-header">Border countries:</span>{results[0] === undefined ? "" : results[0].borders.map((border,index) => <span key={index} className="border-ccountries">{border}</span>)}</p> */}
            </div>
        </div>

    </div>
    );
}

export default SearchResults;