import { Container, Row, Col } from "react-bootstrap"; 
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center"> 
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center"> 
            <div className="social-icon mb-3" style={{ marginTop: '2px' }}>
              <a href="https://www.linkedin.com/in/yash-veer-193790215/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/yashveer_2024"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/webmaestro2002"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="text-center">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
