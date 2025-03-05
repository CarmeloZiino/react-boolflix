// HEADER!!!

// Import Functions from React
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// Function Header

export default function Header() {
  const [search, setSearch] = useState(""); // Stato per la barra di ricerca
  const navigate = useNavigate(); // Hook per la navigazione

  // Function per gestire la ricerca

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand text-light" to="/">
          BoolFlix
        </NavLink>

        {/* Barra di Ricerca */}

        <form className="d-flex ms-auto" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Scrivi qui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
            <button className="btn btn-outline-light" type="submit">
              CERCA
            </button>
        </form>
      </div>
    </nav>
  );
}
