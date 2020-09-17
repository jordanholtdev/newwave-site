import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav } from "react-bootstrap";

import logo from "../images/logo-nw.svg";
import footerStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footerWrapper}>
      <Container className="text-light">
        <Row>
          <Col>
          <Link to="#home" >
            <img
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top mb-0"
              alt="new wave logo"
            />
            </Link>
          </Col>
          <Col>
            <Nav as="ul" className="mr-auto" justify>
              <Nav.Item as="li" className={footerStyles.navList}>
                <Link to="#about">About</Link>
              </Nav.Item>
              <Nav.Item as="li" className={footerStyles.navList}>
                <Link to="#contact">Contact</Link>
              </Nav.Item>
              <Nav.Item as="li" className={footerStyles.navList}>
                <Link to="#team">Team</Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <hr className={footerStyles.borderOutline}/>
        <Row>
          <Col className="text-center">
            <p className={footerStyles.legalText}>
              © {new Date().getFullYear()}, New Wave Global Services, Inc.{" "}
              <br />
              1850 Market St, Philadelphia PA 19103 USA The Clorox™ Logo are
              trademarks of the Clorox Company and are used under license by New
              Wave Global Services, Inc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;