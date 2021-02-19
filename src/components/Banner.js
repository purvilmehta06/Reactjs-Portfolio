import React from "react";
import Typewriter from 'typewriter-effect';
import {FaGithub, FaLinkedin, FaKaggle} from "react-icons/fa";

const Banner = (props) => {
  if(props.data){
    var title = props.data.title
    var image = props.data.image
    var portfolioLink = props.data.portfolioLink
    var buttonName = props.data.buttonName
    var icons = [{icon:<FaGithub className="headerIcon" />},{icon:<FaLinkedin className="headerIcon" />},{icon:<FaKaggle className="headerIcon" />}]
    var social = props.data.social.map(function(social, index){
      return <li key={social.id}>
      <a href={social.link} target="_blank" rel="noopener noreferrer">
        {icons[index].icon}
      </a>
    </li>
    })
  }
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                
                <h1>{title}</h1>
                <div className="type"><Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('I\'m <strong><span style="color: #ff4a57;">Machine Learning Enthusiastic</span>')
                      .pauseFor(2000)
                      .deleteChars(29)
                      .typeString('<strong><span style="color: #ff4a57;">Product Engineer Intern at Spriklr</span>')
                      .pauseFor(2000)
                      .deleteChars(34)
                      .typeString('<strong><span style="color: #ff4a57;">Computational Finance Intern at IIM-A</span>')
                      .pauseFor(2000)
                      .deleteChars(37)
                      .typeString('<strong><span style="color: #ff4a57;">Skilled Programmer</span>')
                      .pauseFor(2000)
                      .start();
                  }}
                /></div>
                <ul className="header__ul">{social}</ul>
                <div className="header__buttons">
                  <a href={portfolioLink} className="btn btn-outline"> {buttonName} </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={image} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
