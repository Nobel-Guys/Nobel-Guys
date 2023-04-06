import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container-background">
      <img
        className="hero-image"
        src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/nobel-prize-medal-2.jpg?itok=6WkTd0wD"
        alt="nobel hero"
      />
      <h1 className="subtitle">2022 Laureates</h1>
      <div className="winners-column">
        <div className="sub-div-latest">
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/paabo-3_2-992x656.jpg"
              alt="svante paabo"
              width="55%"
            />
            <h4>
              <div className="category-subtitle"> Medicine</div> <br /> Svante
              Pääbo
            </h4>
            <q>
              for his discoveries concerning the genomes of extinct hominins and
              human evolution.
            </q>
          </div>
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/ernaux-3_2-992x656.jpg"
              alt="alain aspect"
              width="55%"
            />

            <h4>
              <div className="category-subtitle">Literature</div>
              <br /> Annie Ernaux
            </h4>

            <q>
              for the courage and clinical acuity with which she uncovers the
              roots, estrangements and collective restraints of personal memory.
            </q>
          </div>
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/bialiatski-3_2-992x656.jpg"
              alt="alain aspect"
              width="55%"
            />
            <h4>
              <div className="category-subtitle">Peace</div>
              <br />
              Ales Bialiatski
            </h4>

            <q>
              for documenting war crimes, human right abuses and the abuse of
              power.
            </q>
          </div>
        </div>
        <div className="sub-div-latest">
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/aspect_clauser_zeilinger-3_2-992x656.jpg"
              alt="alain aspect"
              width="60%"
            />

            <h4>
              <div className="category-subtitle">Physics</div>
              <br />
              Alain Aspect &nbsp; | &nbsp;John F. Clauser &nbsp;| &nbsp;Anton
              Zeilinger
            </h4>

            <q>
              for experiments with entangled photons, establishing the violation
              of Bell inequalities and pioneering quantum information science.
            </q>
          </div>
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/bertozzi_meldal_sharpless-3_2-992x656.jpg"
              alt="alain aspect"
              width="60%"
            />

            <h4>
              <div className="category-subtitle">Chemistry</div>
              <br />
              Carolyn R. Bertozzi&nbsp; | &nbsp;Morten Meldal &nbsp;|&nbsp;K.
              Barry
            </h4>

            <q>
              for the development of click chemistry and bioorthogonal chemistry
            </q>
          </div>
          <div className="card-container-latest">
            <img
              className="winners-l"
              src="https://www.nobelprize.org/uploads/2022/10/bernanke_diamond_dybvig-3_2-992x656.jpg"
              alt="alain aspect"
              width="60%"
            />

            <h4>
              <div className="category-subtitle">Economic Sciences</div>
              <br />
              Ben Bernanke &nbsp;| &nbsp;Douglas Diamond &nbsp;|&nbsp; Philip
              Dybvig
            </h4>

            <q>for research on banks and financial crises.</q>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
