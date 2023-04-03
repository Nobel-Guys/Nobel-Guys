/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NavBar from "../NavBar/NavBar";

function Chemistry() {
  return (
    <div>
      <NavBar />
      <div className="timeline">
        <div className="timeline-component">
          <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#000", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
        <div className="timeline-component">
          <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#000", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
        <div className="timeline-component">
          <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#000", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
        <div className="timeline-component">
          <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#000", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Chemistry;
