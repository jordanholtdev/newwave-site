import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import gsap  from "gsap";

import logo from "../images/logo-nw.svg"
import heroStyles from "../styles/hero.module.css"

const Hero = () => {
  // hero content vars
  let heroContainer = useRef(null)
  let title = useRef(null)
  let copy = useRef(null)
  let contactBtn = useRef(null)

  let tl = gsap.timeline()
  // animations
  useEffect(() => {
    tl.to(heroContainer, { visibility: "visible" })
      .from(title, {
        duration: 1.5,
        ease: "power3.out",
        y: 150,
        opacity: 0,
        delay: 1,
      })
      .from(copy, { duration: 1, ease: "power3.out", y: 50, opacity: 0 }, "-=1")
      .from(
        contactBtn,
        { duration: 1, ease: "power3.out", y: 50, opacity: 0 },
        "-=1"
      )
  })

  return (
    <Container fluid className={heroStyles.heroWrapper}>
      <div className={heroStyles.heroContent}>
        <Container
          style={{ visibility: "hidden" }}
          ref={el => (heroContainer = el)}
        >
          <div className={heroStyles.heroContentLine1}>
            <img alt="new wave logo" src={logo} ref={el => (title = el)} />
          </div>
          <div className={heroStyles.heroContentLine2}>
            <p className="lead text-dark" ref={el => (copy = el)}>
              The innovation behind the brands you know
            </p>
          </div>
          <div className={heroStyles.heroContentLine3}>
            <Link to="#contact">
              <Button
                className={heroStyles.btnStyles}
                size="lg"
                ref={el => (contactBtn = el)}
              >
                Contact
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </Container>
  )
}

export default Hero
