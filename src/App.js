import { useState, useEffect } from 'react';
import Header from './component/Header';
import Countries from './component/Countries';

import Container from './component/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
     <Container/>
     
    </div>
  );
}

export default App;
