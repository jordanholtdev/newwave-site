import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row } from "react-bootstrap"
import gsap from "gsap"
import BackgroundImage from "gatsby-background-image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import introStyles from "../styles/intro.module.css"

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  // animation vars

  let triggerEl = useRef(null)
  let title = useRef(null)

  // gsap animations

  useEffect(() => {
    let introTL = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 80%",
        end: "bottom 100px",
        scrub: true,
      },
    })

    introTL.from(title, {
      y: "400",
      opacity: 0,
      ease: "power3.inout",
    })
  })

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wave-image.jpg" }) {
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
            <Row className={introStyles.textWrapper} ref={el => (title = el)}>
              <h1 className="text-center text-light">
                We provide excellence to the part of the value chain we know
                best
                <span className={introStyles.textAccent}>
                  {" "}
                  and pick great partners to build the rest.
                </span>
              </h1>
            </Row>
          </Container>
        </BackgroundImage>
      </Row>
    </Container>
  )
}

export default Intro
