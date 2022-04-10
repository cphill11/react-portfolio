import React from 'react';
// make sure to define the src for the image at top of page
import professionalImage from '../../assets/images/professional-image.jpg'

function About () {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={professionalImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
        </section>
    );
}

export default About; 

// Include a recent photo or avatar of the developer and a short bio about them.