import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Carousel } from "react-bootstrap";

import partnerStyles from "../styles/partners.module.css";

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
        slide2: file(relativePath: { eq: "mongoDB.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slide3: file(relativePath: { eq: "logo-node.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `)

    return (
      <Container fluid className={partnerStyles.parentContainer}>
        <Container>
          <Col className="text-center text-light">
            <Container className="pt-5">
              <h1 className="display-4">Partners</h1>
              <p className="lead">
                New Wave partners with leading grocery, retail, and on-line
                merchants in the US and Canada.{" "}
              </p>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <Container className={partnerStyles.carImg}>
                    <Img fluid={data.slide1.childImageSharp.fluid} />
                  </Container>                  
                </Carousel.Item>
                <Carousel.Item>
                  <Container className={partnerStyles.carImg}>
                    <Img fluid={data.slide2.childImageSharp.fluid} />
                  </Container>                  
                </Carousel.Item>
                <Carousel.Item>
                  <Container className={partnerStyles.carImg}>
                    <Img fluid={data.slide3.childImageSharp.fluid} />
                  </Container>                  
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Container>
      </Container>
    )
}

export default Partners;