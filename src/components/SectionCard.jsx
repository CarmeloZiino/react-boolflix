import React from "react";
import { useAppContext } from "../context/AppContext";
import ReactCountryFlag from 'react-country-flag';


function SectionCard() {
  const { movies, series, isLoading, error } = useAppContext();

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Funzione per visualizzare le stelle
  const renderStars = (vote) => {
    const stars = Math.round(vote / 2);
    return (
      <div className="star-rating">
        {[...Array(stars)].map((_, idStar) => (
          <i key={idStar} className="fas fa-star"></i>
        ))}
      </div>
    );
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
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title-custom">{movie.title}</h5>
                  <p className="card-text">
                    {movie.original_title} <br />
                    {/* Voto con le stelle */}
                    {renderStars(movie.vote_average)}
                  </p>
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
                  <h5 className="card-title-custom">{serie.name}</h5>
                  <p className="card-text">
                    {serie.original_name} <br />
                    {/* Voto con le stelle */}
                    {renderStars(serie.vote_average)}
                  </p>
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
