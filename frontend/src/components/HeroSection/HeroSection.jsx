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
        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/paabo-3_2-992x656.jpg"
          alt="svante paabo"
          width="55%"
        />

        <h4>Medicine &nbsp;&mdash;&nbsp; Svante Pääbo</h4>

        <q>
          for his discoveries concerning the genomes of extinct hominins and
          human evolution.
        </q>

        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/ernaux-3_2-992x656.jpg"
          alt="alain aspect"
          width="55%"
        />

        <h4>Literature &nbsp;&mdash;&nbsp; Annie Ernaux</h4>

        <q>
          for the courage and clinical acuity with which she uncovers the roots,
          estrangements and collective restraints of personal memory.
        </q>

        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/bialiatski-3_2-992x656.jpg"
          alt="alain aspect"
          width="55%"
        />
        <p>
          <h4>Peace &nbsp;&mdash; &nbsp; Ales Bialiatski</h4>
        </p>
        <q>
          for documenting war crimes, human right abuses and the abuse of power.
        </q>

        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/aspect_clauser_zeilinger-3_2-992x656.jpg"
          alt="alain aspect"
          width="60%"
        />

        <h4>
          Physics&nbsp;&mdash; &nbsp;Alain Aspect &nbsp; | &nbsp;John F. Clauser
          &nbsp;| &nbsp;Anton Zeilinger
        </h4>

        <q>
          for experiments with entangled photons, establishing the violation of
          Bell inequalities and pioneering quantum information science.
        </q>

        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/bertozzi_meldal_sharpless-3_2-992x656.jpg"
          alt="alain aspect"
          width="60%"
        />
        <p>
          <h4>
            Chemistry &nbsp;&mdash; &nbsp;Carolyn R. Bertozzi&nbsp; |
            &nbsp;Morten Meldal &nbsp;|&nbsp;K. Barry
          </h4>
        </p>
        <q>
          for the development of click chemistry and bioorthogonal chemistry
        </q>

        <img
          className="winners-l"
          src="https://www.nobelprize.org/uploads/2022/10/bernanke_diamond_dybvig-3_2-992x656.jpg"
          alt="alain aspect"
          width="60%"
        />
        <p>
          <h4>
            Econimc Sciences &nbsp;&mdash; &nbsp;Ben Bernanke &nbsp;|
            &nbsp;Douglas Diamond &nbsp;|&nbsp; Philip Dybvig
          </h4>
        </p>
        <q>for research on banks and financial crises.</q>
      </div>
    </div>
  );
}

export default HeroSection;
