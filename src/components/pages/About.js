import React from 'react';
// make sure to define the src for the image at top of page
import professionalImage from '../../assets/images/professional-image.jpg'

function About () {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={professionalImage} className="my-2" style={{ width: "25%" }} alt="blonde woman in suit jacket" />
      <div className="my-2">
        <p>
          Junior Developer seeking experience after completion of Case Western Reserve University's Full Stack Web Development program.  Prior work experience primarily in healthcare within acute care facilities.  Currently residing in the Cleveland Ohio area and working with Phillips Technology Group as General Office Manager.  
        </p>
      </div>
        </section>
    );
}

export default About; 

// Include a recent photo or avatar of the developer (done) and a short bio about them.