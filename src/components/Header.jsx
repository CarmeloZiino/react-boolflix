// HEADER!!!

// Import Functions from React
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
// Function Header
function Header() {
  const { search, handleSubmit, handleSearch } = useAppContext();

  // Function per gestire la ricerca
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleReset = () => {
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container ">
          <NavLink className="navbar-brand-custom" to="/">
            BoolFlix
          </NavLink>
        {/* Barra di Ricerca */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Scrivi qui..."
            value={search}
            onChange={handleSearch}
          />
          <button className="btn btn-primary">Cerca</button>
          <button className="btn btn-secondary" onClick={() => setSearch("")}>
            Reset
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
