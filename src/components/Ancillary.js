import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';
import '../media-queries.css';

function Ancillary () {
    return (
        <section>
            <hi id="ancillary">Ancillary Skillset from Johns Hopkins Carey School of Business </hi>
            <div id="skills">
        <ul> 
          <li>Business Communications</li>
          <li>Business Leadership and Human Values</li>
          <li>Statistical Analysis</li>
          <li>Business Analytics</li>
          <li>Managing Complex Projects</li>
          <li>Negotiations</li>
          <li>Data Analytics - Spring 2023</li>
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