import React from "react";
import Project from "./Project";
import comicImg from "../assets/images/comics-and-cocktails.jpg";
import teamImg from "../assets/images/team-profile-generator.jpg";
import readImg from "../assets/images/readme-generator.jpg";
import noteImg from "../assets/images/note-taker.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import socialImg from "../assets/images/social-network.jpg";
import Footer from "./Footer";

function Portfolio() {
  return (
    <section className="my-5" class="container-fluid">
      <h1 id="portfolio" class="row">
        Portfolio Display
      </h1>
      <div class="container">
        <div class="row">
          <div class="col-6-md-auto">
            {/* Interative Front-End Group Project */}
            <Project
              title="Comics and Cocktails"
              image={comicImg}
              href="https://github.com/cphill11/comics-and-cocktails.git"
            />
          </div>

          <div class="col-6-md-auto">
            {/* Object-Oriented Programming Challenge */}
            <Project
              title="Team Profile Generator"
              image={teamImg}
              href="https://github.com/cphill11/team-profile-generator.git"
            />
          </div>

          <div class="col-6-md-auto">
            {/* Node.js Challenge */}
            <Project
              title="README Generator"
              image={readImg}
              href="https://github.com/cphill11/readme-generator.git"
            />
          </div>

          <div class="col-6-md-auto">
            {/* Express.js Challenge: Note Taker */}
            <Project
              title="Note Taker"
              image={noteImg}
              href="https://github.com/cphill11/note-taker.git"
            />
          </div>

          <div class="col-6-md-auto">
            {/* Interactive Full-Stack Group Project */}
            <Project 
              title="Fetch"
              image={fetchImg}
              href="https://github.com/cphill11/fetching.git" 
              />
          </div>

          <div class="col-6-md-auto">
            {/* NoSQL Social Network API */}
            <Project
              title="Social Network"
              image={socialImg}
              href="https://github.com/cphill11/social-network.git"
            />
          </div>
        </div>
       <Footer />
      </div>
    </section>
  );
}

export default Portfolio;
