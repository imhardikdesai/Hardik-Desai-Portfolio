import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import './ProjectCard.css'

function ProjectCards(props) {
  const colorArr = {
    "Javascript": ["js", "dark"],
    "React Js": ["react", "dark"],
    "API": ["api", "light"],
    "Node Js": ["node", "light"],
    "Bootstrap": ["bootstrap", "light"],
    "HTML": ["html", "light"],
    "CSS": ["css", "light"],
    "Android": ["android", "dark"],
    "Firebase": ["firebase", "dark"],
    "JAVA": ["java", "dark"],
    "Chakra UI": ["chakra", "dark"],
    "Next Js": ["nextjs", "light"],
    "MongoDB": ["mongodb", "light"],
    "Material UI": ["materialui", "light"],
    "Tailwind CSS": ["tailwindcss", "dark"],
  }
  const getColor = (badge) => {
    return colorArr[badge];
  }
  return (
    <Card className="project-card-view justify-content-center align-items-center">
      <Card.Img style={{ width: "79%" }} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem", padding: "0px 10px" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {/* bg={getColor(element)[0]} */}
        <div className="m-3">
          {props.badge.map((element) => {
            return <span key={element}><Badge text={getColor(element)[1]} bg={getColor(element)[0]} >{element}</Badge>{' '}</span>
          })}
        </div>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
