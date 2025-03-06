import React from "react";
import { useAppContext } from "../context/AppContext";
// import SectionCard from "./SectionCard";

const Main = () => {
  const { movies, series, error } = useAppContext();

  return (
    <main>
      {/* <div className="container">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {movies.length === 0 && series.length === 0 ? (
            <div className="text-center my-5">
              <p className="text-none">
                Nessun risultato trovato. Prova con un'altra ricerca.
              </p>
            </div>
          ) : (
            <>
              <SectionCard title="Film" cards={movies} />
              <SectionCard title="Serie TV" cards={series} />
            </>
          )}
        </div> */}

      <h2>film</h2>

      <ul>
        {movies.map((elem) => {
          return (
            <li key={elem.id}>
              {elem.title} - {elem.original_language} - {elem.original_title}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
