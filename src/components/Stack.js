import React from "react";
import "../index.css";
// import "../media-queries.css";
// import '../header-footer-media-queries.css';

function Stack(props) {
  return (
    <section class="stackSection">
      <h1 id="stack">Coding Stack Overview</h1>
      <div id="skillset">
        <div className="SplitPane">
          <div className="SplitPane-Left">
            {" "}
            {props.left}
            <ul>
              <li>IDE: IntelliJ, Visual Studio Code, R Studio, PyCharm</li>
              <li>MERN Stack: MongoDB, React, Express, Node</li>
              <li>Java, JavaScript, Python</li>
              <li>SQL, SQL Workbench, MySQL</li>
              <li>Angular</li>
              <li>HTML</li>
              <li>CSS, Flexbox </li>
              <li>REST APIs</li>
              
              </ul>
          </div>

          <div className="SplitPane-Right">
            {" "}
            {props.right}
            <ul>
              <li>AWS Cloud Practitioner</li>
              <li>CI/CD (Git)</li>
              <li>Insomnia</li>
              <li>Heroku Deployment</li>
              <li>REST APIs</li>
              <li>Spring Framework, Maven Projects</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
