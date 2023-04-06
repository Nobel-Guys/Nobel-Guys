import React from "react";
import "./NotableWinners.css";

function NotableWinners() {
  const winners = [
    {
      name: "Malala Yousafzai",
      image:
        "https://www.nobelprize.org/images/yousafzai-15198-portrait-medium.jpg",
      text: " Malala Yousafzai is the youngest Nobel laureate ever, awarded the Nobel Peace Prize in 2014 at the age of 17.",
    },
    {
      name: "Leonid Hurwicz",
      image:
        "https://www.nobelprize.org/images/hurwicz-15136-content-portrait-mobile-tiny.jpg",
      text: "  The oldest Nobel laureate was Leonid Hurwicz, who won the Nobel Prize in Economics in 2007 at the age of 90.",
    },
    {
      name: "Marie Curie",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg",
      text: "   Marie Curie is the only person to win Nobel Prizes in two different fields - Physics in 1903 and Chemistry in 1911.",
    },
    {
      name: "John Bardeen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bardeen.jpg/220px-Bardeen.jpg",
      text: "    John Bardeen is the only person to have won the Nobel Prize in Physics twice, in 1956 and 1972.",
    },
    {
      name: "Albert Einstein",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      text: "    Albert Einstein, widely regarded as one of the greatest physicists of all time, was never awarded the Nobel Prize for his theory of relativity.",
    },
    {
      name: "William Faulkner",
      image: "https://images.gr-assets.com/authors/1615562983p5/3535.jpg",
      text: "     William Faulkner won the Nobel Prize in Literature in 1949, once worked as a postmaster for the United States Postal Service.",
    },
    {
      name: "Mother Teresa",
      image:
        "https://www.cny.org/uploads/original/20210617-111243-mother.teresa.jpg",
      text: "      Mother Teresa, who won the Nobel Peace Prize in 1979, was not a citizen of any country at the time of her award.",
    },
    {
      name: "Richard Feynman",
      image:
        "https://cdn.britannica.com/83/21083-050-C53FAB08/Richard-Feynman.jpg",
      text: " Richard Feynman, who won the Nobel Prize in Physics in 1965, was also  an accomplished bongo player.",
    },
    {
      name: "Ernest Hemingway",
      image:
        "http://www.comunicacaomaiseficaz.com/wp-content/uploads/2017/07/Pix-Ernest-Hemingway.jpg",
      text: "   Ernest Hemingway, who won the Nobel Prize in Literature in 1954, survived two plane crashes in his lifetime.",
    },
    {
      name: "Linus Pauling",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Linus_Pauling_1962.jpg",
      text: "        Linus Pauling, who won the Nobel Prize in Chemistry in 1954 and the      Nobel Peace Prize in 1962, was also an advocate for high doses of      vitamin C as a treatment for various illnesses.",
    },
  ];
  return (
    <>
      <h1 className="notable-winners-title">Notable Winners</h1>
      <div className="notable-winners-container">
        {winners.map((winner) => (
          <div className="notable-winner-card">
            <div className="notable-winner-picture-container">
              <img
                className="notable-winner-picture"
                src={winner.image}
                alt={winner.name}
                width="45%"
              />
            </div>
            <div className="notable-winner-card-body">
              <h2>{winner.name}</h2>
              <p>{winner.text}</p>
            </div>
          </div>
        ))}
        {/* 

      

      

        <img
          className="notable-winner-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Linus_Pauling_1962.jpg"
          alt="Linus"
          width="45%"
        />
        <h2>Linus Pauling</h2>
        <p>
          Linus Pauling, who won the Nobel Prize in Chemistry in 1954 and the
          Nobel Peace Prize in 1962, was also an advocate for high doses of
          vitamin C as a treatment for various illnesses.
        </p> */}
      </div>
    </>
  );
}

export default NotableWinners;
