import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./NotableWinners.css";

function NotableWinners() {
  return (
    <>
      <NavBar />
      <h1 className="notable-winners-title">Notable Winners</h1>
      <div className="notable-winners-container">
        <img
          className="notable-winner-picture"
          src="https://www.nobelprize.org/images/yousafzai-15198-portrait-medium.jpg"
          alt="Malala"
          width="45%"
        />
        <h2>Malala Yousafzai</h2>
        <p>
          Malala Yousafzai is the youngest Nobel laureate ever, awarded the
          Nobel Peace Prize in 2014 at the age of 17.
        </p>
        <img
          className="notable-winner-picture"
          src="https://www.nobelprize.org/images/hurwicz-15136-content-portrait-mobile-tiny.jpg"
          alt="Leonid"
          width="45%"
        />
        <h2>Leonid Hurwicz</h2>
        <p>
          The oldest Nobel laureate was Leonid Hurwicz, who won the Nobel Prize
          in Economics in 2007 at the age of 90.
        </p>
        <img
          className="notable-winner-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg"
          alt="Marie"
          width="45%"
        />
        <h2>Marie Curie</h2>
        <p>
          Marie Curie is the only person to win Nobel Prizes in two different
          fields - Physics in 1903 and Chemistry in 1911.
        </p>
        <img
          className="notable-winner-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bardeen.jpg/220px-Bardeen.jpg"
          alt="John"
          width="45%"
        />
        <h2>John Bardeen</h2>
        <p>
          John Bardeen is the only person to have won the Nobel Prize in Physics
          twice, in 1956 and 1972.
        </p>
        <img
          className="notable-winner-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
          alt="Albert"
          width="45%"
        />
        <h2>Albert Einstein</h2>
        <p>
          Albert Einstein, widely regarded as one of the greatest physicists of
          all time, was never awarded the Nobel Prize for his theory of
          relativity.
        </p>

        <img
          className="notable-winner-picture"
          src="https://images.gr-assets.com/authors/1615562983p5/3535.jpg"
          alt="William"
          width="45%"
        />
        <h2>William Faulkner</h2>
        <p>
          William Faulkner won the Nobel Prize in Literature in 1949, once
          worked as a postmaster for the United States Postal Service.
        </p>

        <img
          className="notable-winner-picture"
          src="https://www.cny.org/uploads/original/20210617-111243-mother.teresa.jpg"
          alt="Mother"
          width="45%"
        />
        <h2>Mother Teresa</h2>
        <p>
          Mother Teresa, who won the Nobel Peace Prize in 1979, was not a
          citizen of any country at the time of her award.
        </p>

        <img
          className="notable-winner-picture"
          src="https://cdn.britannica.com/83/21083-050-C53FAB08/Richard-Feynman.jpg"
          alt="Richard"
          width="45%"
        />
        <h2>Richard Feynman</h2>
        <p>
          Richard Feynman, who won the Nobel Prize in Physics in 1965, was also
          an accomplished bongo player.
        </p>

        <img
          className="notable-winner-picture"
          src="http://www.comunicacaomaiseficaz.com/wp-content/uploads/2017/07/Pix-Ernest-Hemingway.jpg"
          alt="Ernest"
          width="45%"
        />
        <h2>Ernest Hemingway</h2>
        <p>
          Ernest Hemingway, who won the Nobel Prize in Literature in 1954,
          survived two plane crashes in his lifetime.
        </p>

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
        </p>
      </div>
      <Footer />
    </>
  );
}

export default NotableWinners;
