import React from "react";
import Project from "./Project";
import comicImg from "../assets/images/comics-and-cocktails.jpg";
import teamImg from "../assets/images/team-profile-generator.jpg";
import readImg from "../assets/images/readme-generator.jpg";
import noteImg from "../assets/images/note-taker.jpg";
import empImg from "../assets/images/employee-tracker.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import socialImg from "../assets/images/social-network.jpg";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="portfolio">Portfolio Display</h1>
  
        {/* Interative Front-End Group Project */}
        <Project title="Comics and Cocktails" image={comicImg} href="https://github.com/cphill11/comics-and-cocktails.git"/>

        {/* Object-Oriented Programming Challenge */}
        <Project title="Team Profile Generator" image={teamImg} href="https://github.com/cphill11/team-profile-generator.git"/>

        {/* Node.js Challenge */}
        <Project title="README Generator" image={readImg} href="https://github.com/cphill11/readme-generator.git"/>
   
        {/* Express.js Challenge: Note Taker */}
        <Project title="Note Taker" image={noteImg} href="https://github.com/cphill11/note-taker.git"/>

        {/* SQL Challenge */}
        <Project title="Employee Tracker" image={empImg} href="https://github.com/cphill11/employee-tracker.git"/>

        {/* Interactive Full-Stack Group Project */}
        <Project title="Fetch" image={fetchImg} href="https://github.com/cphill11/fetching.git"/>

        {/* NoSQL Social Network API */}
        <Project title="Social Network" image={socialImg} href="https://github.com/cphill11/social-network.git"/>

    </section>
  );
}

export default Portfolio;

// Display titled images of 6 of the developer's applications with links to both the deployed applications and the corresponding GitHub repository.

// Loading the portfolio the first time displays the About Me title and section are selected by default.
