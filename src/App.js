import { useState, useEffect } from 'react';
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
    <div className="App">
      <Header />
      <Container searchCountry={searchCountry}/>
      <Countries countries={countries}/>
     
     
     
    </div>
  );
}

export default App;
