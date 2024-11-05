import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description text-start">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate front-end developer with over 1.7 years of
              experience specializing in
              <i>
                <b className="purple"> React.js and Next.js. </b>
              </i>
              <br />
              <br />
              My expertise includes{" "}
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap
                </b>
              </i>
              , empowering me to craft seamless and visually stunning user
              experiences that engage and delight users.
              <br />
              <br />
              I thrive in dynamic team environments, where I collaborate with
              others to deliver high-quality software solutions. I am dedicated
              to staying at the forefront of front-end technologies and trends,
              continuously seeking opportunities to learn and grow.
              <br />
              <br />
              My field of interest lies in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              &nbsp; and exploring areas related to
              <b className="purple"> Backend Technologies.</b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; to create innovative solutions that enhance user
              experiences.
              <br />
              <br />
              My goal is to transform complex problems into elegant and
              efficient solutions while keeping user experience at the core of
              my design philosophy.
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/connectwithmuzammil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linktr.ee/connectwithmuzammil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* <AiOutlineTwitter /> */}
                  <SiLinktree />

                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/connectwithmuzammil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/connectwithmuzammil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
}
export default Home2;
