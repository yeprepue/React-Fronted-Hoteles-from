import { useState } from 'react';
import React from "react"
import './App.css'
import Hoteles from "./componentes/hoteles/hoteles"
import NavBar from "./componentes/nav/nav"


function App() {
  const [filtro, setFiltro] = useState('');

  const handleFilterChange = (value) => {
    setFiltro(value);
  };

  return (
    <div>
      <NavBar handleFilterChange={handleFilterChange} />
      <main className="App">
        <div className="container">
          <Hoteles filtro={filtro} />
        </div>
      </main>
    </div>
  );
}

export default App