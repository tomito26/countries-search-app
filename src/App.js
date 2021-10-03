import { useState, useEffect } from 'react';
import Header from './component/Header';
import Countries from './component/Countries';
import Container from './component/Container';


function App() {
  const[countries,setCountries] = useState([]);

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

  return (
    <div className="App">
      <Header />
      <Container/>
      <Countries countries={countries}/>
     
     
    </div>
  );
}

export default App;
