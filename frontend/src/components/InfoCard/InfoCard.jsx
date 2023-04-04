import React from "react";
import "./InfoCard.css";

function InfoCard() {
  return (
    <div className="info-card">
      <div className="card-text">
        <h1>1923</h1>
        <h2>Albert Einstein</h2>
        <p>
          Albert Einstein, widely regarded as one of the greatest physicists of
          all time, was never awarded the Nobel Prize for his theory of
          relativity.
        </p>
      </div>
      <img
        src="https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg"
        alt="enst"
        width="30%"
      />
    </div>
  );
}

export default InfoCard;
