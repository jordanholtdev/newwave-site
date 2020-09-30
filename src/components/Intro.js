import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import gsap from "gsap";
import BackgroundImage from "gatsby-background-image"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introStyles from "../styles/intro.module.css";

gsap.registerPlugin(ScrollTrigger);


const Intro = () => {

    // animation vars

    let triggerEl = useRef(null);
    let title = useRef(null);

    // gsap animations
   
    useEffect(() => {
      let introTL = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,         
          start: "top 90%",
          end: "center",
          scrub: 0.5,
          markers: true,
        },
      });
  
      introTL.from(title, {
        duration: 1,
        y: '150',
        opacity: 0,
        ease: "power3.inout",       
      })
    });
    

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "corn-field.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container fluid className="mt-5" id="intro" ref={el => (triggerEl = el)}>
      <Row>
        <BackgroundImage
          Tag="section"
          className={introStyles.bgImage}
          fluid={data.placeholderImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <Container>
            <Row className={introStyles.textWrapper}>
            <h1 className="text-center" ref={el => (title = el)}>
              We provide excellence to the part of the value chain we know best
              and pick great partners to build the rest.
            </h1>
            </Row>
          </Container>
        </BackgroundImage>
      </Row>
    </Container>
  )

}


export default Intro;