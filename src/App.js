import { useState, useEffect } from 'react';
import Header from './component/Header';
import Countries from './component/Countries';
import SearchCountriesForm from './component/SearchCountryForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
      <SearchCountriesForm/>
     
    </div>
  );
}

export default App;
