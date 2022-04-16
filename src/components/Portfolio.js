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
      <div>
        <Project title="Comics and Cocktails" image={comicImg} />
      </div>
      <div>
        <Project title="Team Profile Generator" image={teamImg} />
      </div>
      <div>
        <Project title="README Generator" image={readImg} />
      </div>
      <div>
        <Project title="Note Taker" image={noteImg} />
      </div>
      <div>
        <Project title="Employee Tracker" image={empImg} />
      </div>
      <div>
        <Project title="Fetch" image={fetchImg} />
      </div>
      <div>
        <Project title="Social Network" image={socialImg} />
      </div>
    </section>
  );
}

export default Portfolio;

// Display titled images of 6 of the developer's applications with links to both the deployed applications and the corresponding GitHub repository.

// Loading the portfolio the first time displays the About Me title and section are selected by default.
