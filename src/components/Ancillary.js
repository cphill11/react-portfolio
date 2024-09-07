// Auxiliary information as supplement to resume
import React from "react";
import '../index.css';
// import '../media-queries.css';
// import '../header-footer-media-queries.css';

function Ancillary(props) {
  return (
    <section class="ancillarySection">
      <h1 id="ancillary">Auxiliary Information</h1>
      <div id="skillset">
        <div className="SplitPane">
          <div className="SplitPane-Left">
            {" "}
            {props.left}
            
            <ul> Operations Skills
             <li></li>
             <li></li>
              <li>MS Teams, Zoom, Slack</li>
              <li>Miro MindMaps </li>
              <li>Business Leadership and Human Values</li>
              <li>Statistical Analysis</li>
              <li>Managing Complex Projects</li>
              <li>Negotiations</li>
              <li>Data Analytics using R-Studio</li>
              <li>Business Analytics</li>
            </ul>
          </div>
        </div>
        <div className="SplitPane-Right">
          {" "}
          {props.right}
          <ul> Certifications, Awards, & Communities
            <li></li>
            <li></li>
            <li>Java Certification</li>
            <li>AWS Cloud Practitioner Certification</li>
            <li>NSLS Honor Society for both JHU & WGU</li>
            <li>Women in Tech, Community Member</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Ancillary;
