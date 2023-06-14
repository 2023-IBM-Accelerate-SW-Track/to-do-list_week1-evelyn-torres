import React, { Component } from 'react';
import "./About.css";
import me from "../assets/me.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p> <div>
          <div className="split left">
            <div className="centered">
              <img 
              src={me}
              className="profile_image"
                alt="Profile Pic"
                width="250px"
                height="100px"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Evelyn Torres</div>
              <div className="brief_description">
                My name is Evelyn Torres, I am a rising junior at Stevens Institute of Technology majoring 
                Computer Science with a minor in Social Sciences. 
              </div>
            </div>
          </div>
        </div>
      </p> 
      </div>
    )
  }
}