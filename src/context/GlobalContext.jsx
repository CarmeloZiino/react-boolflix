import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
  const [movies, setMovies] = useState([]);

  const [singleMovies, setSingleMovie] = useState({
    id: 0,
    titolo: '',
    titoloOriginale: '',
    lingua: '',
    voto: ''
  });

//   const url = ;

  //chimate api
  //chiamata per ottenere tutte le pizze
  const fetchData = () => {
    axios.get('https://api.themoviedb.org/3/search/movie').then((res) => setPosts(res.data));
  };

  const value = {
    movies,
    singleMovies,
    fetchData,
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };