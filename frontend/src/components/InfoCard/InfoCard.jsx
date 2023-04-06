/* eslint-disable react/prop-types */
import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
  const { date, name, text, image } = props;

  return (
    <div className="info-card">
      <div className="card-text">
        <h1>{date}</h1>
        <h2>{name}</h2>
        <p className="text-area">{text}</p>
      </div>
      <img
        src={
          image ||
          "https://media.istockphoto.com/id/1208175274/vector/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-material-concept-vector.jpg?s=612x612&w=0&k=20&c=t4aK_TKnYaGQcPAC5Zyh46qqAtuoPcb-mjtQax3_9Xc="
        }
        alt={name}
        width="40%"
      />
    </div>
  );
}

export default InfoCard;
