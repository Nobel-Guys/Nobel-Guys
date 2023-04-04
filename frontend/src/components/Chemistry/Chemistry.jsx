/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NavBar from "../NavBar/NavBar";
import InfoCard from "../InfoCard/InfoCard";

function Chemistry() {
  return (
    <div>
      <NavBar />
      <div className="timeline">
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={
              <InfoCard
                date="1923"
                name="Albert Einstein"
                text="Albert Einstein, widely regarded as one of the greatest physicists of all time, was never awarded the Nobel Prize for his theory of relativity."
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
                date="1968"
                name="Nuno Bento"
                text="Legend has it that Nuno Bento was born as a 80 year old baby, who is slowly regressing to become a newborn by 2045."
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
                date="2011"
                name="Duarte Jorge"
                text="Duarte is a curious young man whose dream is to one day become a professional gardener. He already started his journey by buying a flower in Ikea"
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
                date="2019"
                name="Lewis"
                text="Really needing no introduction, the web developer instructorfirst ma been able to scam more than 3000 students"
              />
            }
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Chemistry;
