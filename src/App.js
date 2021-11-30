import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Africa from './component/Africa';
import America from './component/America';
import Asia from './component/Asia';
import CountryInfo from './component/CountryInfo';
import Header from './component/Header';
import Home from './component/Home';


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
    searchCountry()
    
    
  },[]);

  const fetchCountries = async () =>{
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    return data;
  };
  const searchCountry = (item) =>{
    setSearchItem(item)
  
  }
//  console.log(countries)
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home countries={countries}/>}/>
          <Route path="/:countryId" element={<CountryInfo/>}/>
          <Route path="/africa" element={<Africa countries={countries}/>}/>
          <Route path="/asia" element={<Asia countries={countries}/>}/>
          <Route path="/america" element={<America countries={countries}/>}/>
        </Routes>   
      </div>
    </Router>
  );
}

export default App;
