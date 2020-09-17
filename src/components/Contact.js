import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from "react-bootstrap";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

import contactStyles from "../styles/contact.module.css";


const Contact = () => {

    return (
      <Container fluid className={contactStyles.contactWrapper} id="contact">
        <Container fluid="md">
          <Col
            className="text-light py-5 justify-content-md-center col-md-4"
            md={{ span: 4, offset: 4 }}
          >
            <h1 className="display-4 text-center">Contact</h1>
            <Container className="text-center">
              <h4 className="lead">Canada</h4>
              <ul className={contactStyles.contactList}>
                <li className="text-muted">
                <FiMapPin /> 2425 Matheson Blvd E, 8th Floor, Mississauga, Ont. L4W 5K4
                  Canada
                </li>
              </ul>
              <h4 className="lead">USA</h4>
              <ul className={contactStyles.contactList}>
                <li className="text-muted text-center">
                  <FiMapPin /> 1650 Market St, Philadelphia PA 19103 USA
                </li>
              </ul>
              <ul className={contactStyles.contactList}>
                <li>
                  <a href="tel:1-877-6NEWWAVE"><h4 className="text-muted"><FiPhone /> 1-877-6NEWWAVE</h4></a>
                </li>
                <li>
                  <a href="mailto:info@newwaveglobal.com"><h4 className="text-muted"><FiMail /> info@newwaveglobal.com</h4></a>
                </li>
              </ul>
            </Container>
          </Col>
        </Container>
      </Container>
    )
}

export default Contact;