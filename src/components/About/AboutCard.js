import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}

          <p className="home-about-body">
            I am a front-end developer with 1.7 years of experience specializing
            in
            <i>
              <b className="purple"> React.js and Next.js.</b>
            </i>{" "}
            My expertise in
            <i>
              <b className="purple">
                {" "}
                HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap
              </b>
            </i>{" "}
            allows me to create engaging user experiences. I thrive in
            collaborative settings and enjoy exploring
            <i>
              <b className="purple"> Web and Backend Technologies</b>
            </i>{" "}
            while utilizing
            <b className="purple"> Node.js</b> to build innovative solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
