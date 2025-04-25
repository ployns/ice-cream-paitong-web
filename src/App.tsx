import React from 'react';
import HeaderNav from './components/navbar'
import Cover from "./assets/cover.jpg";


function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <img src={Cover} alt="Example" className="w-full h-auto opacity-60" />
    </div>
  );
}

export default App;
 