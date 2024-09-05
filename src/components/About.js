import React from "react";
// define the src for the image at top of page
import professionalImage from "../assets/images/professional-image.jpg";
import Footer from "./Footer";
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
          Software Engineer Student.  Currently building professional and technical experience after completion of Case Western Reserve University's Full Stack Web Development program. Completed immersive Java Coding Bootcamp with Southern Methodist University.  Currently employed as General Office Manager for Phillips Technology Group, a family-owned small business. 
         </p>   
         <p> 
          Well educated.  Completed M.S. Healthcare Management at Johns Hopkins Carey School of Business in December of 2023. Enrolled in accelerated B.S. Software Engineering program at Western Governor's University, expected to complete in Fall 2026.
          </p>
         <p>
          Cleveland, Ohio resident who enjoys remote work and is excited for opportunity to work as software developer outside of family business. 
          </p>
          <p>
          Career changer. Transitioned from Critical Care at end of COVID wave in 2021 to Technology field with advent of first coding bootcamp. 
          </p>
          <p>
          International traveler, with visits to both Scotland and New Zealand.  Ready to explore future travel endeavors.
          </p>
      </div>
      </div>
      <Footer/>
    </section>
  );
}

export default About;
