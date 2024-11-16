import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

export default function Discovery() {
  return (
    <section className="flex-container w-full min-h-screen">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={27}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                My Discovery Process:{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🪛
                </span>
              </h1>

              <h1 className="" style={{ fontSize: 25, padding: 50 }}>
                <div>
                  {" "}
                  The journey I took to design a wearable watch with a Raspberry
                  Pi has been an incredible learning experience, even though I
                  wasn’t able to fully assemble the project. The entire process
                  allowed me to dig deeply into the planning and research
                  stages, where I mapped out feature requirements and developed
                  a clear roadmap for implementing core functions of the watch
                  like time display, alarms, and power management. Through my
                  research, I gained a foundational understanding of each
                  component needed for the watch—such as displays, RTC modules,
                  and power solutions—and learned about the nuances of
                  integrating hardware with the Raspberry Pi. I spent time
                  exploring and learning wiring techniques, soldering
                  fundamentals, PCB design, and the software libraries required
                  to make these elements work together, giving me a solid
                  foundation of the practical skills required to build the final
                  product.
                </div>

                <div style={{ textAlign: "left", padding: 50 }}>
                  {" "}
                  Despite not reaching the assembly phase, each challenge I
                  encountered clarified the technical steps and skills I need to
                  make this project a reality. By exploring 3D printing for
                  enclosure design and studying how to establish secure battery
                  connections (which I was able to do through attending multiple
                  workshops), I now have a solid roadmap for turning this
                  concept into a wearable device. The experience highlighted my
                  interest in embedded systems and interactive hardware,
                  deepening my enthusiasm for future projects that blend
                  creativity with hands-on tech. Although unfinished, this
                  project has sparked my passion and set a foundation for
                  advancing my skills in hardware development and innovative
                  device design.
                </div>

                <div style={{ padding: 50 }}>
                  {" "}
                  Note: The thumbnail is not my own work, though it is a
                  representation of the project's final assembly.
                </div>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
