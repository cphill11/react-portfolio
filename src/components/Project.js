import React from 'react'

const Project = (props) => {
  return (
      <>
    <div>{props.title}</div>
    {/* <img src={props.image} alt=""></img> */}
    <a href={props.href}><img src={props.image} class="projects" alt=""></img></a>
    </>
  )
}

export default Project

// 6 projects

// 1 Interactive Front-End Project (M8 Group Project)   
        // Title: Comics and Cocktails
        // GitHub Repo: https://github.com/cphill11/comics-and-cocktails.git


// 2  Node.js Challenge: Professional README Generator (M9)
        // Title: README Generator
        // GitHub Repo: https://github.com/cphill11/readme-generator.git

// 3  Object-Oriented Programming Challenge: Team Profile Generator (M10)
        // Title: Team Profile Generator
        // GitHub Repo: https://github.com/cphill11/team-profile-generator.git

// 4  Express.js Challenge: Note Taker (M11)
        // Title: Note Taker
        // GitHub Repo: https://github.com/cphill11/note-taker.git
        // Heroku Link: https://intense-eyrie-70687.herokuapp.com/

// 5 Interactive Full-Stack Project (M16 Group Project)
        // Title: Fetch
        // GitHub Repo: https://github.com/cphill11/fetching.git
        // Heroku link: https://intense-crag-43217.herokuapp.com/

// 6  NoSQL Challenge: Social Network API  (M18)
        // Title: Social Network
        // GitHub Repo: https://github.com/cphill11/social-network.git
