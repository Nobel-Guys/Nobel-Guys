/* eslint-disable react/prop-types */
import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
  const { date, name, text } = props;

  return (
    <div className="info-card">
      <div className="card-text">
        <h1>{date}</h1>
        <h2>{name}</h2>
        <p className="text-area">{text}</p>
      </div>
      <img
        src="https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg"
        alt="enst"
        width="40%"
      />
    </div>
  );
}

export default InfoCard;
