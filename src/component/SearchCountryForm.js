import { useState } from "react";

const SearchCountryForm = ({ searchCountry }) =>{
    const[value,setValue] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!value){
            alert('Please enter search word')
            return
        }
        searchCountry(value);
        setValue("")
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div className="search-icon">
                <i className="fas fa-search" onClick={handleSubmit}></i>
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="search for a country...."
                    value={value} 
                    onChange={e=>setValue(e.target.value)}
                />
            </div>
           
        </form>
    </div>
    );
}

export default SearchCountryForm