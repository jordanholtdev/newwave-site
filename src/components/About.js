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
    }
  `)

  return (
    <Container className="mt-5" id="about" >
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
        <Col xs={{ span: 12, order: "first" }} md={{ span: 8, order: "last" }}>
          <p className="lead">
            From product ideation, value definition, intellectual property
            development, partner identification and management, through product
            development, packaging and launch, we fill the gaps in the value
            chain, creating world-class solutions for the world’s leading
            brands.
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
      {/* <Row className={aboutStyles.rowContent}> */}
      {/* <Col className="m-4 align-self-center">
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
        <Col lg={true} className="m-4" >
          <div className={aboutStyles.imgContainer}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </Col> */}
      {/* </Row> */}
    </Container>
  )
}

export default About
