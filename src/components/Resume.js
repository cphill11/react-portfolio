import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';
import '../media-queries.css';

function Resume() {
  return (
    <section>
      <h1 id="resume">Coding Stack Overview</h1>
      <div id="skillset">
        <ul> 
          <li>IDE:IntelliJ and Visual Studio Code</li>
          <li>MERN Stack: MongoDB, React.js, Express.JS, Node.js</li>
          <li>Java: Object-Oriented Programming: Java, JavaScript</li>
          <li>HTML / CSS / Bootstrap / Bulma</li>
          <li>SQL / SQL Workbench / Mongoose</li>
          <li>RESTful APIs</li>
          <li>Kanbans: Jira and GitHub</li>
          <li>Docker</li>
          <li>Spring Framework</li>
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
