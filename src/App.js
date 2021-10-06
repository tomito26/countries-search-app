import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './component/Header';
import Countries from './component/Countries';
import Container from './component/Container';
import SearchResults from './component/SearchResults';


function App() {
  const[countries,setCountries] = useState([]);
  const[searchItem,setSearchItem] = useState({})
  const[darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
    const getCountries = async () =>{
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    }
   
    getCountries();
    
    
  },[]);

  const fetchCountries = async () =>{
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    return data;
  };

  const searchCountry = async (country) =>{
      const res = await fetch(`https://restcountries.com/v2/name/${country}`);
      const data = await res.json();
      setSearchItem(data)
    
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Container searchCountry={searchCountry} />
        <Route path="/" exact render={(prop)=>(
            <>
              <Countries countries={countries} />
            </>
        )}/>
        <Route path='/search' render={(prop) => (
          <>
            <SearchResults results={searchItem} />
          </>
        )}/>
        
            
      </div>
    </Router>
  );
}

export default App;
