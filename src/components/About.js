import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import aboutStyles from "../styles/about.module.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      packet1: file(relativePath: { eq: "green-packet.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      packet2: file(relativePath: { eq: "purple-packet.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oxyProduct: file(relativePath: { eq: "oxygen-product.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenProduct: file(relativePath: { eq: "green-product.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bottleProduct: file(relativePath: { eq: "bottle-product.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Container className="my-5" id="about">
        <Row className="py-5 align-items-center">
          <Col xs={12} md={8}>
            <h2 className="pb-5">
              We provide excellence to the part of the value chain we know best
              and pick great partners to build the rest.
            </h2>
          </Col>
          <Col xs={{ span: 12, offset: 3 }} md={{ span: 2, offset: 1 }}>
            <div className={aboutStyles.imgContainer}>
              <Img fluid={data.packet1.childImageSharp.fluid} />
            </div>
          </Col>
        </Row>
        <Row className="py-5 align-items-center">
          <Col xs={{ span: 12, offset: 3 }} md={{ span: 3, offset: 1 }}>
            <div className={aboutStyles.imgContainer}>
              <Img fluid={data.packet2.childImageSharp.fluid} />
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 8, order: "last" }}
          >
            <p className="lead">
              From product ideation, value definition, intellectual property
              development, partner identification and management, through
              product development, packaging and launch, we fill the gaps in the
              value chain, creating world-class solutions for the world’s
              leading brands.
            </p>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col xs={12} md={8}>
            <p className="lead">
              We deliver industry-leading household cleaning products including
              single dose, multi-chamber dishwasher and laundry detergent pacs,
              OXI powered stain removers, and more.
            </p>
          </Col>
          <Col xs={{ span: 12, offset: 3 }} md={{ span: 2, offset: 1 }}>
            <div className={aboutStyles.imgContainer}>
              <Img fluid={data.packet1.childImageSharp.fluid} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pt-5">
        <Row className="justify-content-center py-5">
          <h1 className=" lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
        </Row>
        <Row className="justify-content-center align-items-center mt-5">
          <Col className="pt-2" xs={{ span: 8 }} md={{ span: 2 }}>
            <Img fluid={data.greenProduct.childImageSharp.fluid} />
          </Col>
          <Col className="pt-4" xs={{ span: 12 }} md={{ span: 4 }}>
            <Img fluid={data.oxyProduct.childImageSharp.fluid} />
          </Col>
          <Col className="pt-4" xs={{ span: 8 }} md={{ span: 2 }}>
            <Img fluid={data.bottleProduct.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
