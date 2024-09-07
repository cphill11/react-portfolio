import React from "react";
import Project from "./Project";
import keepingTallyImg from "../assets/images/keepingTally.jpg";
import familyPetImg from "../assets/images/familyPets.jpg";
import randomPswdGenImg from "../assets/images/randomPswdGen.jpg";
import greatReadsImg from "../assets/images/great-reads.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import comicsImg from "../assets/images/comics.jpg";
import hellkittyImg from "../assets/images/hellkitty.jpg";
import '../index.css';
import '../media-queries.css';
import '../header-footer-media-queries.css';


function Portfolio(props) {
  return (
    <section class="portfolioSection">
      <h1 id="portfolio">Portfolio Display: Images are hyperlinks to repo README.md files
      </h1>

        <div className="SplitPane">
        <div className="SplitPane-Left-Projects">
          {" "}
          {props.left}
          <Project
            title="Great Reads"
            subtitle="Social App"
            image={greatReadsImg}
            href="https://github.com/cphill11/great-reads/blob/main/README.md"
          />{" "}
          {props.left}
          <Project
            title="Fetch"
            subtitle="Social App"
            image={fetchImg}
            href="https://github.com/cphill11/fetching/blob/main/README.md"
          />{" "}
          {props.left}
          <Project
            title="Comics and Cocktails"
            subtitle="Random Drinks and Giggles"
            image={comicsImg}
            href="https://github.com/perfect-perfect/comics-and-cocktails/blob/main/README.md"
          />
        </div>

        <div className="SplitPane-Right">
          {" "}
          {props.right}
          <Project
            title="Hellkitty3D"
            subtitle="Digital 3D Art Gallery"
            image={hellkittyImg}
            href="https://github.com/cphill11/hellkitty3d/blob/main/README.md"
          />{" "}
          {props.right}
          <Project
            title="Family Pets"
            subtitle="Social App"
            image={familyPetImg}
            href="https://github.com/cphill11/family-pets/blob/main/README.md"
          />{" "}
          {props.right}
          <Project
            title="Keeping Tally"
            subtitle="Interactive Lists"
            image={keepingTallyImg}
            href="https://github.com/cphill11/keeping-tally/blob/main/README.md"
          />{" "}
          {props.right}
          <Project
            title="Random Password Generator"
            subtitle="Reliable Passwords"
            image={randomPswdGenImg}
            href="https://github.com/cphill11/random-password-generator/blob/main/README.md"
          />
        </div>
      </div>
  
    </section>
  );
}
export default Portfolio;
