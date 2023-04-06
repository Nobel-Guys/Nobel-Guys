/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useParams } from "react-router-dom";
import InfoCard from "../InfoCard/InfoCard";
import "./Categories.css";
import axios from "axios";

function Categories() {
  const [laureates, setLaureates] = useState([]);
  const [title, setTitle] = useState("");

  const { type } = useParams();

  //! falta adicionar os restantes urls e categories

  const imagesArray = {
    che: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Otto_Hahn_%28Nobel%29.jpg/200px-Otto_Hahn_%28Nobel%29.jpg",
      "https://www.nobelprize.org/images/pauling-13095-portrait-medium.jpg",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvTbTgSYUyw4NLZr8mUlTJaqH6fuO_TU8B6LcQKVou1hbAU_wi",
    ],
    phy: [
      "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg",
      "https://images.newscientist.com/wp-content/uploads/2021/04/16153830/richard_feynman.jpg",
      "https://www.nobelprize.org/images/higgs-15185-portrait-medium.jpg",
    ],
    lit: [
      "https://www.portaldaliteratura.com/assets/files_autores/1898.jpg",
      "https://cdn.pensador.com/img/authors/al/be/albert-camus-l.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kazuo_Ishiguro_in_2017_01.jpg",
    ],
    eco: [
      "https://www.cato.org/sites/cato.org/files/styles/aside_mobile/public/social-images/friedman.jpg?itok=9awjHo1v",
      "https://fronteiras.com/storage/thinkers/December2021/fd0113861ed71eb22dc48826176f0175.jpg",
      "https://stonecenter.gc.cuny.edu/files/2019/04/paul-krugman_335x465.jpg",
    ],
    pea: [
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
      "https://my.neighbor.org/wp-content/uploads/2022/02/mother-teresa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
    ],
    med: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ivan_Pavlov_NLM3.jpg",
      "https://www.biografiasyvidas.com/monografia/fleming/fotos/fleming_alexander_1.jpg",
      "https://cdn.britannica.com/19/151119-050-6AAFA850/Barbara-McClintock-laboratory-Cold-Spring-Harbor-New-March-26-1947.jpg",
    ],
  };

  const filterArray = {
    che: ["otto hahn", "linus pauling", "frances"],
    phy: ["albert einstein", "richard p. feynman", "peter higgs"],
    lit: ["rudyard kipling", "albert camus", "kazuo ishiguro"],
    eco: ["milton friedman", "amartya sen", "paul krugman"],
    pea: ["martin luther king jr.", "mother teresa", "barack h. obama"],
    med: ["ivan pavlov", "sir alexander fleming", "barbara mcclintock"],
  };

  const getLaureates = () => {
    const urls = [];
    filterArray[type]?.map((element) =>
      urls.push(
        `https://masterdataapi.nobelprize.org/2.1/laureates?name=${element}&nobelPrizeCategory=${type}`
      )
    );
    const tempArray = [];

    const requests = urls.map((url) => axios.get(url));

    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        tempArray.push(resp.data.laureates[0]);
      });
      setLaureates(tempArray);
    });
  };

  const getType = () => {
    switch (type) {
      case "che":
        setTitle("Chemistry");
        break;
      case "eco":
        setTitle("Economic Sciences");
        break;
      case "lit":
        setTitle("Literature");
        break;
      case "pea":
        setTitle("Peace");
        break;
      case "phy":
        setTitle("Physics");
        break;
      case "med":
        setTitle("Medicine");
        break;

      default:
        setTitle("Nobels ERROR");
    }
  };

  useEffect(() => {
    getType();
    getLaureates();
  }, []);

  return (
    <div>
      <h1 className="subtitle4">{title || null}</h1>
      <div className="intro-container">
        <p>
          This timeline highlights some of the most significant Nobel Prize
          works in the field of {title || null}, starting from the first year of
          the award's inception in 1901.
        </p>
      </div>

      <div className="timeline">
        <VerticalTimeline lineColor="#000">
          {laureates
            ? laureates.map((result, index) => (
                // <div key={result.id}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: "#000", color: "#fff" }}
                  date={
                    <InfoCard
                      date={result?.nobelPrizes[0]?.awardYear}
                      name={result?.knownName?.en}
                      text={result?.nobelPrizes[0]?.motivation?.en}
                      image={imagesArray[type][index]}
                    />
                  }
                />
                // </div>
              ))
            : null}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Categories;
