import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';
import '../media-queries.css';

function Resume() {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <div id="skillset">
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>MERN Stack</li>
          <li>SQL / NoSQL</li>
          <li>Object-Oriented Programming</li>
          <li>Group Projects: Front-End and Full Stack</li>
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

export default Resume;
