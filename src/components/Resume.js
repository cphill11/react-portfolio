import React from "react";
import pdf from "../assets/small/resume.pdf";

// "./resume.pdf";

function Resume() {
  return (
    <section className="my-5" class="container">
      <h1 id="resume">Resume</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2" class="row">
        <ul>
          <li class="col">HTML / CSS / JavaScript</li>
          <li class="col">Git</li>
          <li class="col">Bootstrap</li>
          <li class="col">MERN Stack</li>
          <li class="col">SQL / NoSQL</li>
          <li class="col">Group Projects: Front-End and Full Stack</li>
        </ul>
      </div>
      <div>
        <a href={pdf} className="my-4" target="_blank" rel="noreferrer">
          Resume Downloadable as PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;

// Include a link to a downloadable resume and a list of the developer’s proficiencies.
