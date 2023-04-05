/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NavBar from "../NavBar/NavBar";
import InfoCard from "../InfoCard/InfoCard";
import "./Chemistry.css";
// import axios from "axios";

function Chemistry() {
  //   const [chemistry, setChemistry] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://api.nobelprize.org/2.1/laureates?_ga=2.80023191.1466721709.1679661688-1905291879.1679661688"
  //       )
  //       .then((response) => {
  //         const { data } = response;

  //         const filteredLaureates = data.laureates.filter(
  //           (laureate) =>
  //             laureate.knownName &&
  //             laureate.knownName.en &&
  //             ["otto hahn", "linus pauling", "frances arnold"].includes(
  //               laureate.knownName.en.toLowerCase()
  //             )
  //         );
  //         setChemistry(filteredLaureates);
  //       });
  //   }, []);

  return (
    <div>
      <NavBar />
      <h1 className="subtitle4">Chemistry</h1>
      <div className="intro-container">
        <p>
          This timeline highlights some of the most significant Nobel Prize
          works in the field of Chemistry, starting from the first year of the
          award's inception in 1901.
        </p>
      </div>
      <div className="timeline">
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={
              <InfoCard
                date="Albert Einstein"
                name="Albert Einstein"
                text="Albert Einstein"
              />
            }
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={
              <InfoCard
                date="Albert Einstein"
                name="Albert Einstein"
                text="Albert Einstein"
              />
            }
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={
              <InfoCard
                date="Albert Einstein"
                name="Albert Einstein"
                text="Albert Einstein"
              />
            }
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={
              <InfoCard
                date="Albert Einstein"
                name="Albert Einstein"
                text="Albert Einstein"
              />
            }
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Chemistry;
