import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Niyas P </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated developer with experience creating
            custom websites with Express, ReactJs, Angular, NestJs, HTML.
            Active in the Field of Machine Learnig and Deep Learning Areas.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
