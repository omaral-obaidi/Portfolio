import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Logo2.png";
import chatify from "../../Assets/Projects/rpw.png";
import bitsOfCode from "../../Assets/Projects/memory.png";

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
              title="Discovery: Raspberry Pi Powered Watch"
              description="Building a wearable watch using Raspberry Pi, focusing on feature selection, hardware connections, and functionality. Skills developed include wiring and soldering, PCB Fabrication, 3D printing, and integrating displays, RTC modules, and buttons. Final product will include rechargeable power management and custom 3D-printed case for comfort and durability."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Led the creative and consumer-focused design of Memly, a productivity app that enhances student work efficiency through utilization of Ebbinghaus’s Forgetting Curve hypothesis. Collaborated with team members on pitching strategies, conducted discussions on consumer analytics, and contributed to prototype development approaches, refining the app's design to better support learning retention and efficiency."
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
