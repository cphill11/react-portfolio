import React from "react";
import Project from "./Project";
import keepingTallyImg from "../assets/images/keepingTally.jpg";
import familyPetImg from "../assets/images/familyPets.jpg";
import randomPswdGenImg from "../assets/images/randomPswdGen.jpg";

function Portfolio(props) {
  return (
    <section class="portfolioSection">
      <h1 id="portfolio">
        Portfolio Display: Images are hyperlinks to repo README.md files</h1>
  
      <div className="SplitPane">
        {" "}
        {props.left}
        <div className="SplitPane-Left">   
          <Project
            title="Family Pets"
            subtitle="Social App"
            image={familyPetImg}
            href="https://github.com/cphill11/family-pets/blob/main/README.md"
          />

          {" "}
          {props.left}  
           <Project
            title="Random Password Generator"
            subtitle="Interactive and User Friendly"
            image={randomPswdGenImg}
            href="https://github.com/cphill11/random-password-generator/blob/main/README.md"
          />
        </div>
        <div className="SplitPane-Right">
          {" "}
          {props.right}     
          <Project
            title="Keeping Tally"
            subtitle="Interactive Lists"
            image={keepingTallyImg}
            href="https://github.com/cphill11/keeping-tally/blob/main/README.md"
          />        
        </div>
      </div>
    </section>
    
  );
}
export default Portfolio;
