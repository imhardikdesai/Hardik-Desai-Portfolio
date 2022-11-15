import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {

  const [project, setProject] = useState([])

  const fetchProject = async () => {
    const url = 'https://raw.githubusercontent.com/imhardikdesai/JSON-Data/main/Hardik-Desai-Portfolio/project.json';
    let data = await fetch(url);
    let myProjects = await data.json();
    setProject(myProjects.projects);
  }

  useEffect(() => {
    fetchProject();
  });

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

          {project.map((element) => {
            return <Col md={4} className="project-card" key={element.imgurl}>
              <ProjectCard
                imgPath={element.imgurl}
                isBlog={false}
                title={element.title}
                description={element.description}
                ghLink={element.sourceLink}
                badge={element.badge}
                demoLink={element.liveDemoLink}
              />
            </Col>
          })}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
