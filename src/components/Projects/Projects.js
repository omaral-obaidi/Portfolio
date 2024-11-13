import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Logo2.png";
import chatify from "../../Assets/Projects/rpw.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Raspberry Pi Powered Watch"
              description="Building a wearable watch using Raspberry Pi, focusing on feature selection, hardware connections, and functionality. Skills developed include wiring and soldering, PCB Fabrication, 3D printing, and integrating displays, RTC modules, and buttons. Final product will include rechargeable power management and custom 3D-printed case for comfort and durability."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Medical Prescription Management Software"
              description="Built a prescription management system with TypeScript, Next.js, and database technologies to streamline tracking and patient medication management. Promoted efficient physician-patient interactions, reduced administrative tasks, and enhanced patient safety within healthcare practices."
              ghLink="https://github.com/Takella6315/Prescription-Management"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
