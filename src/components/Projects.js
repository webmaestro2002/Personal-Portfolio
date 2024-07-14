import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat.io",
      description: "MERN Stack Project : Real Time Chat App | JWT, Socket.io",
      imgUrl: projImg1,
      liveUrl: "https://chat-io-xbr1.onrender.com",  // replace with your live URL
      githubUrl: "https://github.com/webmaestro2002/Chat.io"  // replace with your GitHub URL
    },
    {
      title: "Sorting Visualizer",
      description: "React Project : Sorting Visualizer",
      imgUrl: projImg2,
      liveUrl: "https://sortingvisualizer-cg0u.onrender.com",  // replace with your live URL
      githubUrl: "https://github.com/webmaestro2002/Sorting-Visualizer"  // replace with your GitHub URL
    },
    {
      title: "Utkrishti : SIH Team Project",
      description: "HTML | CSS | JS | Bootstrap : Cognicare Website",
      imgUrl: projImg3,
      liveUrl: "http://example.com/utkrishti-live",  // replace with your live URL
      githubUrl: "http://github.com/example/utkrishti"  // replace with your GitHub URL
    },
    {
      title: "JIIT Insights : Minor Team Project",
      description: "MERN Stack Project : Event Management Website for Jaypee Students",
      imgUrl: projImg3,
      liveUrl: "http://example.com/utkrishti-live",  // replace with your live URL
      githubUrl: "http://github.com/example/utkrishti"  // replace with your GitHub URL
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed numerous projects, encompassing both personal endeavors and collaborative team projects created during hackathons.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}
