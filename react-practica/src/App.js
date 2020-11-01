import React from 'react';
import Detail from './Detail';
import NavBar from './NavBar';
import Pet from './Pet';

function App() {
  // xd
  return (
    <div className="App">
      <NavBar title="PetApp" />
      <Pet name="Luna" animal="Dog" breed="Havanese" location="Medellin" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Detail id="44895939" />
    </div>
  );
}

export default App;
