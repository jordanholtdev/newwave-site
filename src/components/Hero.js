import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";
import gsap  from "gsap";

import heroStyles from "../styles/hero.module.css"

const Hero = () => {

  // hero content vars
  let title = useRef(null);
  let copy = useRef(null);
  let contactBtn = useRef(null);

  let tl = gsap.timeline();
  // animations
  useEffect(() => {
    tl.from(title, {duration: 1.5, ease: "power3.out", y: 150,  opacity: 0, delay: 1})
      .from(copy, {duration: 1, ease: "power3.out", y: 50, opacity: 0 }, "-=1")
      .from(contactBtn, {duration: 1, ease: "power3.out", y: 50, opacity: 0 }, "-=1")
  });

  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "hero-windmill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.indexImage.childImageSharp.fluid}
      className={heroStyles.bgWrapper}
      id="home"
    >
      <div className={heroStyles.imgFilter}>
        <div className={heroStyles.heroContent}>
          <Container>
            <div className={heroStyles.heroContentLine1}>            
                <h1 className={heroStyles.title} ref={el => (title = el)}>
                  new<span className={heroStyles.waveTitle}>wave</span>
                </h1>
            </div>
            <div className={heroStyles.heroContentLine2} >
            <p className="lead text-light" ref={el => (copy = el)}>
              The innovation behind the brands you know
            </p>
            </div>
              <div className={heroStyles.heroContentLine3} >
              <Link to="#contact">
                <Button className={heroStyles.btnStyles} size="lg" ref={el => (contactBtn = el)}>
                  Contact
                </Button>
              </Link>
              </div>
          </Container>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
