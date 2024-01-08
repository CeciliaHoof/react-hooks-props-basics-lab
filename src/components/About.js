import React from "react";
import Links from "./Links"

function About(props) {
  console.log(props)
  let hasBio;
  if (props.bio && props.bio !== ""){
    hasBio = true;
  }
  else {hasBio = false;}
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {hasBio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;