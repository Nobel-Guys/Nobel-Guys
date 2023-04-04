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
            date={<InfoCard />}
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={<InfoCard />}
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={<InfoCard />}
          />
          <br />
          <br />
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            date={<InfoCard />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Chemistry;
