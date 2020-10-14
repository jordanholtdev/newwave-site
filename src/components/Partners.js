import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Col } from "react-bootstrap"

import partnerStyles from "../styles/partners.module.css"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "logo-clorox.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Container className="pt-5">
        <Col className="text-center text-dark">
          <Container className="pt-5">
            <h2 className="display-4" style={{ color: "#095391" }}>
              Leading partners{" "}
            </h2>
            <p
              className="lead"
              style={{ color: "#3e8ac6", marginTop: "0.5rem" }}
            >
              {" "}
              New Wave partners with leading grocery, retail, and on-line
              merchants in the US and Canada.
            </p>
            <Container className={partnerStyles.carImg}>
              <Img fluid={data.slide1.childImageSharp.fluid} />
            </Container>
          </Container>
        </Col>
      </Container>
    </Container>
  )
}

export default Partners
