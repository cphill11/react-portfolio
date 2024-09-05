import React from "react";

import "../index.css";
import "../media-queries.css";

function Ancillary(props) {
  return (
    <section class="ancillarySection">
      <h1 id="ancillary">Ancillary Skillset Learned at JHU</h1>
      <div id="backing">
      <div id="skillset">
       <div className="SplitPane">
      <div className="SplitPane-Left"> 
        {" "}
        {props.left} 
        <ul>
          <li>MS Teams, Zoom, Slack</li>
          <li>Miro MindMaps </li>
          <li>Business Leadership and Human Values</li>
          <li>Statistical Analysis</li>    
        </ul>
      </div>
      </div>
      <div className="SplitPane-Right">
        {" "}
          {props.right}   
          <ul>
          <li>Managing Complex Projects</li>
          <li>Negotiations</li>
          <li>Data Analytics</li>
          <li>Business Analytics</li>
        </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Ancillary;
