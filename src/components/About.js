import React from "react";
import professionalImage from "../assets/images/professional-image.jpg";
import islandImage from "../assets/images/nz.jpg";
import pdf from "../assets/small/resume.pdf";
import '../index.css';
// import '../media-queries.css';
// import '../header-footer-media-queries.css';

function About(props) {
  // JSX being returned to represent HTML in JS
  return (
    // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
    <section className="aboutSection">
      <h1 id="about">About Me</h1>
      {/* <div id="backing"> */}
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
              WGU Software Engineer Student with 2+ years personal experience with development.  Expected 2026 graduation with B.S. degree.  Recently
              certified as AWS Certified Cloud Practitioner.
            </p>
            <p>
              Previously completed two coding bootcamps: MERN Full Stack Web
              Development with Case Western University and Java with Cognizant,
              through Southern Methodist University.
            </p>
            <p>
              Achieved M.S. Healthcare Management at Johns Hopkins Carey School
              of Business in December of 2023.
            </p>
            <p>
              Career changer. Transitioned from bedside Critical Care at end of
              2021 to Technology field with advent of first coding bootcamp.
            </p>
            <p>
              International traveler, with visits to both Scotland and New
              Zealand. The image at the top of the page is of the Mt. Paku
              Summit, taken from the beach just north of Pauanui in New Zealand.
              Image has been elongated from original size. Original is posted
              below.
            </p>
            <p>Please utilize Downloadable Resume PDF hyperlink for contact information.</p>

            <div className="SplitPane">
              {" "}
              {props.right}
              <div className="SplitPane-Right-Photo">
                <img
                  src={islandImage}
                  className="islandPhoto"
                  // style={{ width: "25" }}
                  alt="extinct volcano as viewed from ocean beach"
                />
              </div>
            </div>

            <div className="SplitPane-Left-PDF">
              {" "}
              {props.left}
              <div id="pdf">
                <a href={pdf} className="my-4" target="_blank" rel="noreferrer">
                  Downloadable Resume PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default About;
