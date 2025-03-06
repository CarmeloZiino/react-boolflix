import React from "react";
import { useAppContext } from "../context/AppContext";
import ReactCountryFlag from "react-country-flag";

function SectionCard() {
  const { movies, series, isLoading, error } = useAppContext();

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Funzione per visualizzare le stelle

  function renderStars(vote) {
    let conversion = Math.ceil(vote / 2);

    let fullStar = "★";
    let emptyStar = "☆";

    let result = fullStar.repeat(conversion);
    let result2 = emptyStar.repeat(5 - conversion);

    return result + result2;
  }

  //LANGUAGE

  const languageToCountryCode = {
    en: "US",
    es: "ES",
    it: "IT",
    fr: "FR",
    de: "DE",
    ja: "JP",
  };

  const getCountryCode = (language) => {
    return languageToCountryCode[language] || null;
  };

  return (
    <div className="container d-flex flex-column gap-5 p-4">
      <div className="row">
        <h2 className="text-light section-custom">Film</h2>

        {movies.length === 0 ? (
          <p className="text-light h3">Nessun film trovato</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body d-flex flex-column gap-4">
                  <div>
                  <h5 className="card-title-custom">{movie.title}</h5>
                  <p className="card-originalTitle-custom">
                      {movie.title !== movie.original_title &&
                        movie.original_title}
                    </p>
                  </div>



                  <div>
                    <p className="card-text d-flex align-items-center gap-2 ndrowCard">
                      <ReactCountryFlag
                        countryCode={getCountryCode(movie.original_language)}
                        svg
                        style={{ width: "35px", height: "25px" }}
                      />
                    </p>
                    <p className="card-text d-flex align-items-center gap-2 ndrowCard">
                      {renderStars(movie.vote_average)}
                    </p>
                  </div>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="row">
        <h2 className="text-light section-custom">Serie TV</h2>
        {series.length === 0 ? (
          <p className="text-light h3">Nessuna serie trovata</p>
        ) : (
          series.map((serie) => (
            <div key={serie.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  className="card-img-top"
                  alt={serie.name}
                />
                <div className="card-body d-flex flex-column">
                <div>
                  <h5 className="card-title-custom">{serie.name}</h5>
                  <p className="card-originalTitle-custom">
                      {serie.name !== serie.original_title &&
                        serie.original_title}
                    </p>
                  </div>                
                  <div>
                 
                    <p className="card-text d-flex align-items-center gap-2 ndrowCard">
                      <ReactCountryFlag
                        countryCode={getCountryCode(serie.original_language)}
                        svg
                        style={{ width: "35px", height: "25px" }}
                      />
                    </p>
                    <p className="card-text d-flex align-items-center gap-2 ndrowCard">
                      {renderStars(serie.vote_average)}
                    </p>
                  </div>

                  <p className="card-text">{serie.overview}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SectionCard;
