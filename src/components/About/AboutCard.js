import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Omar Al-Obaidi </span>
            from <span className="purple"> Baghdad, Iraq.</span>
            <br />
            I am currently employed as a Full Stack Developer at Reffy.
            <br />I am currently completing a B.Sc. in Computer Engineering from
            <span className="purple"> Georgia Tech</span>, and have already
            completed a B.Sc. in Chemistry from{" "}
            <span className="purple"> Emory University.</span>
            <br />
            <br />
            In my free time, my hobbies include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board and Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Hardware Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Fiction Stories
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
