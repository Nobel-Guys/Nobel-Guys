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

  // const imagesArray = {
  //   che: ["", "", ""],
  //   phy: ["", "", ""],
  // };

  //! falta adicionar os restantes arrays
  // 'che', 'eco', 'lit', 'pea', 'phy', 'med'
  const filterArray = {
    che: ["otto hahn", "linus pauling", "frances"],
    phy: ["otto hahn", "linus pauling", "frances"],
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

  //! falta terminar switch
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
        setTitle("");
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
            ? laureates.map((result) => (
                <div key={result.id}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: "#000", color: "#fff" }}
                    date={
                      <InfoCard
                        date={result?.knownName?.en}
                        name={result?.knownName?.en}
                        text={result?.knownName?.en}
                      />
                    }
                  />
                </div>
              ))
            : null}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Categories;
