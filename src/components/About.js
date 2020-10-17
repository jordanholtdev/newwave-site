import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import aboutStyles from "../styles/about.module.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      packet1: file(relativePath: { eq: "adw-blue-green-pac.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      packet2: file(relativePath: { eq: "adw-purple-green-pac.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroomCleaner: file(relativePath: { eq: "bathroom-cleaner.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      windowCleaner: file(relativePath: { eq: "window-cleaner.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      handsoapBag: file(relativePath: { eq: "hand-soap-bag.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      handsoapBottle: file(relativePath: { eq: "hand-soap-bottle.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allPurpose: file(relativePath: { eq: "all-purpose.png" }) {
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
      <Container fluid className="my-5" id="about">
        <Row className="py-5 align-items-center">
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 5, offset: 2 }}>
            <h2 className="display-4" style={{ color: "#095391" }}>
              Discover our products
            </h2>
            <p className={aboutStyles.subHeading}>
              World-class solutions for leading brands
            </p>
          </Col>
        </Row>
        <Row className="py-5 align-items-center">
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className={aboutStyles.imgContainer}>
              <Img fluid={data.packet1.childImageSharp.fluid} />
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 4, offset: 1, order: "last" }}
          >
            <h3 className="display-4" style={{ color: "#095391" }}>
              Cost-effective products and services
            </h3>
            <p className={aboutStyles.subHeading}>Creating custom solutions</p>

            <p className="">
              We deliver industry-leading household cleaning products including
              single dose, multi-chamber dishwasher and laundry detergent pacs,
              OXI powered stain removers, and more.
            </p>
          </Col>
        </Row>
        <Row className="pt-5 align-items-center">
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 4, offset: 1, order: "first" }}
          >
            <h3 className="display-4" style={{ color: "#095391" }}>
              Real world solutions
            </h3>
            <p className={aboutStyles.subHeading}>Customized for your needs</p>
            <p className="">
              From product ideation, value definition, intellectual property
              development, partner identification and management, through
              product development, packaging and launch, we fill the gaps in the
              value chain, creating world-class solutions for the world’s
              leading brands.
            </p>
          </Col>
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 1 }}>
            <div className={aboutStyles.imgContainer}>
              <Img fluid={data.packet2.childImageSharp.fluid} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pt-5">
        <Row className="justify-content-around mt-5">
          <Col
            className="pt-2"
            xs={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
          >
            <Img
              className={aboutStyles.upperProductImages}
              fluid={data.bathroomCleaner.childImageSharp.fluid}
            />
          </Col>
          <Col
            className="pt-4"
            xs={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
          >
            <Img
              className={aboutStyles.upperProductImages}
              fluid={data.windowCleaner.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col className="" xs={{ span: 8 }} md={{ span: 7 }} lg={{ span: 3 }}>
            <Img fluid={data.allPurpose.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col
            className="pt-2"
            xs={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
          >
            <Img
              className={aboutStyles.lowerProductImages}
              fluid={data.handsoapBag.childImageSharp.fluid}
            />
          </Col>
          <Col
            className="pt-2"
            xs={{ span: 8 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
          >
            <Img
              className={aboutStyles.lowerProductImages}
              fluid={data.handsoapBottle.childImageSharp.fluid}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
