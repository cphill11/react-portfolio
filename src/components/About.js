import React from "react";
// define the src for the image at top of page
import professionalImage from "../assets/images/professional-image.jpg";
import "../index.css";
import "../media-queries.css";

function About() {
  // JSX being returned to represent HTML in JS
  return (
    // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
    <section className="aboutSection">
      <h1 id="about">About Me</h1>
      <div id="aboutPhoto">
        {/* Recent photo and short bio */}
        <img
          src={professionalImage}
          className="photo"
          style={{ width: "25" }}
          alt="blonde woman in suit jacket"
        />
      <div id="summary">
        <p>
          Junior Developer building professional and technical experience after completion of Case Western Reserve University's Full Stack Web Development program. 

          Completed immersive Java Coding Bootcamp with Southern Methodist University.
         </p>   
         <p>
          Front End Development is fantastic as it allows developers to quickly influence the users experience and review changes live time.  Back End Development is outstanding as it enables developers to create a solid framework for functionality that allows individuals to interact with the user interface efficiently and effectively. 
         </p>   
         <p> 
          Well educated.  Completing final year at Johns Hopkins University, Carey School of Business, in M.S. Healthcare Management. Ongoing education using Udemy to diversify technical skillset. 
          </p>  
         <p>
          Cleveland, Ohio resident who enjoys remote work. General Office Manager for Phillips Technology Group but excited for opportunity to work as software developer outside of family business. Transitioned from Critical Care in large medical facilities to technology field at end of COVID wave in 2021.
          </p>

          <p>
          International traveler, with visits to both Scotland and New Zealand.  Looking forward to future travel endeavors.
          </p>
      </div>
      </div>
    </section>
  );
}

export default About;
