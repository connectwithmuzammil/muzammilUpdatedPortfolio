import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Token Launch Platform"
              description="A dynamic token launch platform designed for seamless presale experiences. Built with React.js and powered by Bootstrap for a responsive user interface, this application allows users to easily participate in token presales. Key features include wallet integration for secure transactions, real-time token updates, and a user-friendly dashboard for tracking token performance."
              ghLink="https://github.com/connectwithmuzammil/javaTokenLandingPluton"
              demoLink="https://javatoken.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="QR Code Generator Dashboard"
              description="An advanced QR code generation platform that empowers users to create and manage their own QR codes from a personalized dashboard. Built with React, this application allows users to generate QR codes, track analytics, and gain insights into their usage. The admin side offers full control over user management and QR code monitoring, ensuring a seamless experience for both users and administrators."
              ghLink="https://github.com/connectwithmuzammil/qr-creator"
              demoLink="https://qr-creator-black.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Limitless Web3.0 Crypto Exchange"
              description="A visually appealing crypto exchange platform designed for users to buy, sell, and swap cryptocurrencies. Currently, this application features a sleek and intuitive UI, providing a simple and fast user experience. While it showcases modern web technologies, the platform is static at this stage, focusing on design and layout. Future developments will enhance functionality, empowering users to engage with the decentralized finance ecosystem."
              ghLink="https://github.com/connectwithmuzammil/changeie"
              demoLink="https://exchange-vercel78.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Ecommerce Web App"
              description="An interactive eCommerce web application that allows users to browse products categorized by store. Admins can effortlessly create and manage product categories, while users can select their preferred store, view products, and add items to their cart or mark them as favorites. The platform features a streamlined checkout process, enhancing the shopping experience. Built with modern web technologies, this app ensures a seamless and user-friendly interface for both admins and customers."
              ghLink="https://github.com/connectwithmuzammil/EccomerceWebAppPluton"
              demoLink="https://eccomerce-web-app--sable.vercel.app/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="OpenSea NFT Clone"
              description="A static landing page clone of OpenSea, crafted to showcase NFTs with an appealing design. Built using React, this project replicates the visual aesthetics and user experience of the original platform, allowing users to explore digital assets in a user-friendly layout. Although it's a static website, it effectively highlights the features and offerings of the NFT marketplace, making it a great entry point for those interested in digital art and decentralized finance."
              ghLink="https://github.com/connectwithmuzammil/opensea-clone"
              demoLink="https://opensea-nft-clone.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
