import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';
import '../media-queries.css';

function Ancillary () {
    return (
        <section>
            <h1 id="ancillary">Ancillary Skillset</h1>
            <div id="skillset">
        <ul> 
          <li>Professional Communication Tools: MS Teams, Zoom, Slack, Miro Mind Maps</li>
          <li>Business Leadership and Human Values</li>
          <li>Statistical Analysis</li>
          <li>Business Analytics</li>
          <li>Managing Complex Projects</li>
          <li>Negotiations</li>
          <li>Data Analytics - Spring 2023</li>
          <li></li>
          <li></li>
          <li> Graduating from Johns Hopkins Carey School of Business December '23 with M.S</li>
          </ul>
         </div>
      <div id="pdf">
        <a
          href={pdf}          
          className="my-4"
          target="_blank"
          rel="noreferrer"
        >
          Resume Downloadable as PDF
        </a>
      </div>
    </section>
  );
}

export default Ancillary;