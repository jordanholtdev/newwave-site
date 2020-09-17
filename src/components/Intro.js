import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introStyles from "../styles/intro.module.css";

gsap.registerPlugin(ScrollTrigger);


const Intro = () => {

    // animation vars

    let triggerEl = useRef(null);
    let imageCard = useRef(null);

    // gsap animations
   

    useEffect(() => {
      let introTL = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,         
          start: "top 90%",
          end: "bottom",
        },
      });

      introTL.from(imageCard, {
        duration: 2,
        x: '-600',
        opacity: 0,
        ease: "power3.inout",       
      })
    });


    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lightbulb-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container className="my-5"  id="intro" ref={el => (triggerEl = el)}>
      <Row className={introStyles.rowContent}>
        <Col lg={true} className="m-4" ref={el => (imageCard = el)}>
          <div className={introStyles.imgContainer} >
          <Img fluid={data.placeholderImage.childImageSharp.fluid}  />     
          </div>   
        </Col>
        <Col className="m-4 align-self-center">
          <Card >
            <Card.Body>
              <p className="lead">
                We provide excellence to the part of the value chain we know
                best and pick great partners to build the rest.
              </p>
              <p>
                From product ideation, value definition, intellectual property
                development, partner identification and management, through
                product development, packaging and launch, we fill the gaps in
                the value chain, creating world-class solutions for the world’s
                leading brands.
              </p>
              <p>
                We deliver industry-leading household cleaning products
                including single dose, multi-chamber dishwasher and laundry
                detergent pacs, OXI powered stain removers, and more.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}


export default Intro;