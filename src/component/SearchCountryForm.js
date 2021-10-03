import { useState } from "react";

const SearchCountriesForm = () =>{
    const[value,setValue] = useState("")

    return(
    <div>
        <form>
            <input 
                type="text" 
                className="form-control" 
                placeholder="search for a country...."
                value={value} 
                onChange={e=>setValue(e.target.value)}
            />
        </form>
    </div>
    );
}

export default SearchCountriesForm