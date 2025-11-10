import React from "react";
import Project from "./Project";
import keepingTallyImg from "../assets/images/keepingTally.jpg";
import familyPetImg from "../assets/images/familyPets.jpg";
import randomPswdGenImg from "../assets/images/randomPswdGen.jpg";
import familyRecipes from "../assets/images/familyRecipes.jpg";
import fetchImg from "../assets/images/fetch.jpg";
import comicsImg from "../assets/images/comics.jpg";
import hellkittyImg from "../assets/images/hellkitty.jpg";
import worldMapInteractive from "../assets/images/worldInteractiveMap.jpg";
import northCarolina from "../assets/images/northCarolina.jpg"
import "../index.css";
// import '../media-queries.css';
// import '../header-footer-media-queries.css';

function Portfolio(props) {
  return (
    <section class="portfolioSection">
      <h1 id="portfolio">
        Portfolio Display: Images are hyperlinks to repo README.md files
      </h1>

      <div className="SplitPane">
        <div className="SplitPane-Left-Projects">
          {" "}
          {props.left}
          <Project
            title="Hide and Seek Family Recipes"
            subtitle="Cooking Reference Site"
            image={familyRecipes}
            href="https://github.com/cphill11/family-recipes/blob/main/README.md"
          />{" "}
          {props.left}
          <Project
            title="World Interactive Map"
            subtitle="Geographical Data Tool"
            image={worldMapInteractive}
            href="https://github.com/cphill11/world-map-interactive/blob/main/README.md"
          />{" "}
          {props.left}
          <Project
            title="North Carolina Cities"
            subtitle="City Comparison Site"
            image={northCarolina}
            href="https://github.com/cphill11/north-carolina-city-comparisons/blob/main/readme.MD"
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
