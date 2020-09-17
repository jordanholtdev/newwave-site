import React, {useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutStyles from "../styles/about.module.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  // animation vars

  let aboutTriggerEl = useRef(null);
  let aboutImageCard = useRef(null);

  useEffect(() => {
    let introTL = gsap.timeline({
      scrollTrigger: {
        trigger: aboutTriggerEl,         
        start: "top 90%",
        end: "bottom",
      },
    });

    introTL.from(aboutImageCard, {
      duration: 2,
      x: '600',
      opacity: 0,
      ease: "power3.inout",       
    })
  });

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "multiple-windmills.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container className="mt-5" id="about" ref={el => (aboutTriggerEl = el)}>
      <Row className={aboutStyles.rowContent}>
        <Col className="m-4 align-self-center">
          <Card>
            <Card.Body>
              <h1 className="display-4 text-center">About Us</h1>
              <p>
                New Wave is not a traditional supplier. We work closely with CPG
                companies and retailers across North America to develop, market,
                and supply National brand and private label products.
              </p>
              <p>
                We are known as an innovative company that can identify needs
                within multiple vertical markets and respond to them quickly and
                nimbly, providing our partners with immediate growth
                opportunities while making a environmentally positive impact in
                the world.
              </p>
              <p>
                We create real world solutions that work and bring them to
                market quickly.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={true} className="m-4" ref={el => (aboutImageCard = el)}>
          <div className={aboutStyles.imgContainer}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;