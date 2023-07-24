import React from "react";
import Project from "./Project";
import comicImg from "../assets/images/comics-and-cocktails.jpg";
import teamImg from "../assets/images/team-profile-generator.jpg";
import keepingTallyImg from "../assets/images/keepingTally.jpg";
import familyPetImg from "../assets/images/familyPets.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import greatImg from "../assets/images/great-reads.jpg";
import Footer from "./Footer";
function Portfolio(props) {
  return (
    <div>
      <h1 id="portfolio">
        Portfolio Display: Click on Image to open link to informative Repository README.md file
      </h1>
      <div id="backing">
      <div className="SplitPane">
        {" "}
        {props.left}
        <div className="SplitPane-Left">   
          <Project
            title="Family Pets"
            subtitle="Front-End Only"
            image={familyPetImg}
            href="https://github.com/cphill11/family-pets/blob/main/README.md"
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
            title="Keeping Tally"
            subtitle="Html, CSS, JS"
            image={keepingTallyImg}
            href="https://github.com/cphill11/keeping-tally/blob/main/README.md"
          />
         
         <Project
            title="Comics and Cocktails"
            subtitle="Full Stack Group Project"
            image={comicImg}
            href="https://github.com/cphill11/comics-and-cocktails.git"
          />
   
        </div>
        <div className="SplitPane-Right">
          {" "}
          {props.right}
              
          <Project
            title="Fetch"
            subtitle="Full Stack Group Project"
            image={fetchImg}
            href="https://github.com/cphill11/fetching.git"
          />
   
          <Project
            title="Great Reads"
            subtitle="Full Stack Group Project"
            image={greatImg}
            href="https://github.com/cphill11/great-reads.git"
          />
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Portfolio;
