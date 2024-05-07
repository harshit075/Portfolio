import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h4  style={{color: "white", textDecoration: "underline"}}>PORTFOLIO</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harshit-borana-3a685a257/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/harshit075"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_harsh.it_09?igsh=MTJoNXFqcDB6dDllYg=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Harshit Borana 2024.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
