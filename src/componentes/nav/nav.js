import React from "react";
import './nav.css';

const NavBar = ({ handleFilterChange }) => {
  const handleKeyUp = (event) => {
    const filterValue = event.target.value;
    handleFilterChange(filterValue);
  };
  return (
    <div className="container  border-bottom border-black">
      <h2 className="navbar-h2">BUSCA HOTELES</h2>
      <input id="search"
        placeholder="Buscar"
        className="form-control-lg search"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default NavBar;

