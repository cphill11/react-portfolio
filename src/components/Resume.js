import React from "react";
import pdf from "../assets/small/resume.pdf";

// "./resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>
      <div className="my-5" id="skillset">
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>MERN Stack</li>
          <li>SQL / NoSQL</li>
          <li>Group Projects: Front-End and Full Stack</li>
        </ul>
      </div>
      <div>
        <a href={pdf} id="pdf" className="my-4" target="_blank" rel="noreferrer">
          Resume Downloadable as PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;

// Include a link to a downloadable resume and a list of the developer’s proficiencies.
