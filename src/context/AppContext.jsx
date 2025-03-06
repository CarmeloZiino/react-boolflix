import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiMovies = import.meta.env.VITE_MOVIES_URL;
  const apiSeries = import.meta.env.VITE_SERIES_URL;
  const apiImg = import.meta.env.VITE_IMG_BASE_URL

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Chiamata per i film
    axios
      .get(`${apiMovies}?api_key=${apiKey}&query=${search}`)
      .then((res) => {
        setMovies(res.data.results); // Aggiorniamo i risultati dei film
      })
      .catch((err) => {
        console.log(err);
        setError("Errore nel recupero dei film.");
      });

    // Chiamata per le serie
    axios
      .get(`${apiSeries}?api_key=${apiKey}&query=${search}`)
      .then((res) => {
        setSeries(res.data.results); // Aggiorniamo i risultati delle serie
        setIsLoading(false); // Fine del loading
      })
      .catch((err) => {
        console.log(err);
        setError("Errore nel recupero delle serie.");
        setIsLoading(false);
      });
  };

  
  return (
    <AppContext.Provider
      value={{ movies, series, search, setSearch, handleSearch, handleSubmit, isLoading, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext };
