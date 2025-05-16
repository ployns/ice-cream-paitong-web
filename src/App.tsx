import React from 'react';
import HeaderNav from './components/navbar'
import TitalHeader from './components/title-header';
import Body from './components/body';


function App() {
  return (
    <div className="App bg-amber-50">
      <HeaderNav></HeaderNav>
      <TitalHeader></TitalHeader>
      <Body></Body>
    </div>
  );
}

export default App;
 