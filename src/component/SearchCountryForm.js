const SearchCountriesForm = () =>{
    return(
    <form>
        <input 
         type="text" 
         className="form-control" 
         placeholder=""
         value={value} 
         onChange={e=>setValue(e.target.value)}
        />
    </form>
    );
}

export default SearchCountriesForm