import React from "react";
import Project from "./Project";
import comicImg from "../assets/images/comics-and-cocktails.jpg";
import teamImg from "../assets/images/team-profile-generator.jpg";
import readImg from "../assets/images/readme-generator.jpg";
import noteImg from "../assets/images/note-taker.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import greatImg from "../assets/images/great-reads.jpg";
import Footer from "./Footer";
function Portfolio(props) {
  return (
    <div>
      <h1 id="portfolio">
        Portfolio Display: Click on Image for link to Repository
      </h1>
      <div id="backing">
      <div className="SplitPane">
        {" "}
        {props.left}
        <div className="SplitPane-Left">   
          <Project
            title="Note Taker"
            subtitle="Express.js"
            image={noteImg}
            href="https://github.com/cphill11/note-taker.git"
          />
         <Project
            title="Team Profile Generator"
            subtitle="Object-Oriented Programming"
            image={teamImg}
            href="https://github.com/cphill11/team-profile-generator.git"
          />
        </div>
        <div className="SplitPane-Mid">
          {" "}
          {props.mid}     
          <Project
            title="README Generator"
            subtitle="Node.js"
            image={readImg}
            href="https://github.com/cphill11/readme-generator.git"
          />
         
         <Project
            title="Comics and Cocktails"
            subtitle="Interactive Front-End Group Project"
            image={comicImg}
            href="https://github.com/cphill11/comics-and-cocktails.git"
          />
   
        </div>
        <div className="SplitPane-Right">
          {" "}
          {props.right}
              
          <Project
            title="Fetch"
            subtitle="Interactive Full-Stack Group Project"
            image={fetchImg}
            href="https://github.com/cphill11/fetching.git"
          />
   
          <Project
            title="Great Reads"
            subtitle="Interactive Full-Stack Group Project"
            image={greatImg}
            href="https://github.com/cphill11/great-reads.git"
          />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
