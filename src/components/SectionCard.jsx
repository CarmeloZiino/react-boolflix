import React from "react";
import { AppContext } from "../context/AppContext";

function SectionCard({ title, cards }) {
  if (!cards || cards.length === 0) return null;

  // const handleStars = (vote) => {
  //   return Match.ceil(vote / 2);
  // };

  return (
    <section className="mb-5">
      <h1>MOVIES</h1>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards.map((item, index) => (
          <div className="col" key={index}>
            <div
              className=""
              style={{
                backgroundImage: item.poster ? `url(${item.poster})` : "none",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-overlay">
                <h5 className="card-title">{item.title}</h5>
                <p>
                  <strong>Titolo originale:</strong> {item.original_title}
                </p>
                <p>
                  <strong>Lingua:</strong> {item.language || "N/A"}
                </p>
                <p>
                  <strong>Voto:</strong> {handleStars(item)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCard;
