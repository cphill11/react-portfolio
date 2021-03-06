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
          Junior Developer seeking technical experience after completion of Case
          Western Reserve University's Full Stack Web Development program. Prior
          work experience primarily in healthcare within acute care facilities.
          Currently residing in the Cleveland area and working with Phillips
          Technology Group as General Office Manager.
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;
