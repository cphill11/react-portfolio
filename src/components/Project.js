import React from "react";
import '../index.css';
import '../media-queries.css';
import '../header-footer-media-queries.css';

const Project = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
      <a href={props.href}>
        <img src={props.image} className="projects" alt=""></img>
      </a>
    </>
);
};

export default Project;
