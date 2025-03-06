import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseImgUrl = import.meta.env.VITE_IMG_BASE_URL;
  const apiMovies = import.meta.env.VITE_MOVIES_URL;
  const apiSeries = import.meta.env.VITE_SERIES_URL;

 
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSearching(true);

    // Chiamata per i film
    axios
      .get(`${apiMovies}movie?api_key=${apiKey}&query=${search}`)
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false); // Fermo il loading una volta che la risposta arriva
        setIsSearching(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Errore nel recupero dei dati");
        setIsLoading(false);
        setIsSearching(false);
      });

    // Chiamata per le serie
    axios
      .get(`${apiSeries}tv?api_key=${apiKey}&query=${search}`)
      .then((res) => {
        setSeries(res.data.results);
        setIsLoading(false); // Fermo il loading una volta che la risposta arriva
        setIsSearching(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Errore nel recupero dei dati");
        setIsLoading(false);
        setIsSearching(false);
      });
  
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        series,
        search,
        setSearch,
        isLoading,
        isSearching,
        selectedGenre,
        setSelectedGenre,
        genres,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context) {
    return {
      movies: [],
      series: [],
      search: "",
      isLoading: false,
      isSearching: false,
      selectedGenre: "",
      flags: {},
      genres: [],
      error: null,
      isAvailable: false,
    };
  }

  return {
    ...context,
    isAvailable: true,
  };
};

export { AppProvider, useAppContext };
