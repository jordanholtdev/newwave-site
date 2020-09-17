import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo-nw.svg";

import headerStyles from "../styles/header.module.css";

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" className={headerStyles.navWrapper}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="140"
          height="30"
          className="d-inline-block align-top mb-0"
          alt="new wave logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: " rgba(255, 255, 255, 0.2)" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li" className={headerStyles.navItem}>
            <Link className={headerStyles.navLinkItem} to="#about">About</Link>
          </Nav.Item>
          <Nav.Item as="li" className={headerStyles.navItem}>
            <Link  className={headerStyles.navLinkItem} to="#contact">Contact</Link>
          </Nav.Item>
          <Nav.Item as="li" className={headerStyles.navItem}>
            <Link className={headerStyles.navLinkItem} to="#team">Team</Link>
          </Nav.Item>
        </Nav>
        <Nav></Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
