import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg10 from "../assets/img/project-iphone.png";
import projImg11 from "../assets/img/project-aarogya_sathi.png";
import projImg12 from "../assets/img/project-vikrant.png";
import projImg13 from "../assets/img/project-amazon.png";
import projImg14 from "../assets/img/project-tic-tac-toe.png";
import projImg15 from "../assets/img/project-stone-paper-sizzer.png";
import projImg16 from "../assets/img/project-currency.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import IOTproject1 from "../assets/img/smart_boat.jpg"
import IOTproject4 from "../assets/img/Vatarakshak.png"
import IOTproject3 from "../assets/img/Smart_google_stick.jpg"
import IOTproject2 from "../assets/img/Powerbyte.jpg"
import IOTproject5 from "../assets/img/ShovelEye.png"
import IOTproject6 from "../assets/img/Object_avoidance.jpg"
import achivement1 from "../assets/img/win2.jpg"
import achivement2 from "../assets/img/win1.jpg"
import achivement3 from "../assets/img/win3.jpg"
import achivement4 from "../assets/img/win4.jpg"
import achivement5 from "../assets/img/win5.jpg"
import achivement6 from "../assets/img/win6.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Iphone 15 pro Clone",
      description: "React.js, Three.js, GSAP",
      imgUrl: projImg10,
    },
    {
      title: "Aarogya Sathi Web App",
      description: "Virtual Doctor Robot",
      imgUrl: projImg11,
    },
    {
      title: "Vikrat : Smart Garbage Collector Boat",
      description: "Product Based Website",
      imgUrl: projImg12,
    },
    {
      title: "Amazon Clone",
      description: "HTML5, CSS",
      imgUrl: projImg13,
    },
    {
      title: "Tic, Tac, Toe",
      description: "HTML, CSS, JAVASCRIPT",
      imgUrl: projImg14,
    },
    {
      title: "Ston, Paper, Sizzer",
      description: "HTML, CSS, JAVASCRIPT",
      imgUrl: projImg15,
    },
    {
      title: "Currency Converter",
      description: "HTML, CSS, JAVASCRIPT",
      imgUrl: projImg16,
    },
  ]
    const iotprojects = [
      {
        title: "Vikrant: Smart Garbage Collecting Boat",
        description: "It collects, segregate all type of floating waste from the water bodies. Istart Ideathon Winner project, Shankara Hackathon Winner",
        imgUrl: IOTproject1,
      },
      {
        title: "PowerByte",
        description: "Automation in industries & commercial area",
        imgUrl: IOTproject2,
      },
      {
        title: "Smart Goggles for Blind ",
        description: "Smart Goggles helps blind person to avoid the obstacles in front of them. Tech Stack : Arduino UNO, C++, Ultra sonic sensor",
        imgUrl: IOTproject3,
      },
      {
        title: "Vata Rakshak: Tree Cutting and Alerting System",
        description: "It Detect & Inform forest fire, rise in temp & humadity, theft alert to the forest departement, local police and near by local area through web app notification. MNIT Hackathon Winner Project",
        imgUrl: IOTproject4,
      },
      {
        title: "Shovel Eye",
        description: "JCB coal machine",
        imgUrl: IOTproject5,
      },
      {
        title: "Object avoidance car",
        description: "Arduino UNO, IR sensor, Ultrasonic sensor",
        imgUrl: IOTproject6,
      },
    ]
      const hybridprojects = [
        {
          title: "Smart India Hackathon 2023",
          description: "Power Byte: Automation in industries & commercial area",
          imgUrl: achivement1,
        },
        {
          title: "Shankara Global Hackathon 2024",
          description: "Vikrant: Smart Garbage Collecting Boat",
          imgUrl: achivement2,
        },
        {
          title: "SIH Interval 2023",
          description: "IOT Hardware Edition",
          imgUrl: achivement3,
        },
        {
          title: "MNIT Hackathon 2023",
          description: "Vata-Rakshak: Tree Cutting Alerting System",
          imgUrl: achivement4,
        },
        {
          title: "Istart Ideathon 2023",
          description: "Smart Garbage Collector Boat",
          imgUrl: achivement5,
        },
        {
          title: "Best out of Electronics waste",
          description: "waste computer electric waste to indian map",
          imgUrl: achivement6,
        },
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my Projects ✨</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">IOT Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Awards</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          iotprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>           
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          hybridprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}


export default Projects