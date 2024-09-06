import React from "react";
import "../index.css";
import "../media-queries.css";

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
                <li>IDE: IntelliJ, Visual Studio Code</li>
                <li>MERN Stack: MongoDB, React.js, Express.JS, Node.js</li>
                <li>Object-Oriented Programming: Java, JavaScript</li>
                <li>HTML5 / CSS / Flexbox </li>
                <li>SQL / MySQL / MySQL Workbench</li>
                <li>RESTful APIs</li>
                <li>Kanbans: Jira and GitHub</li>
                
              </ul>
            </div>
         
            <div className="SplitPane-Right">
              {" "}
              {props.right}
              <ul>
                <li>AWS Cloud Practitioner</li>
                <li>CI/CD (Git)</li>
                <li>Docker Containers</li>
                <li>Heroku Deployment</li>
                <li>HTML / CSS / Flexbox </li>
                <li>SQL / SQL Workbench / MySQL</li>
                <li>Spring Framework / Maven Projects</li>
                <li>Insomnia</li>
              </ul>
            </div>
          </div>
        </div>
       
     
    </section>
  );
}

export default Stack;
