import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Home() {
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
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
