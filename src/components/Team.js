import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";

const Team = () => {


    const data = useStaticQuery(graphql`
      query {
        sunil: file(relativePath: { eq: "sunil-circle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        john: file(relativePath: { eq: "john-circle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        peter: file(relativePath: { eq: "peter-circle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

  return (
    <Container className="my-5" id="team">
      <h1 className="display-4 py-5 text-center">Our Team</h1>
      <Row>
        <Col className="m-4">
          <Card>
            <Img fluid={data.sunil.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className="text-center">
                SUNIL BAHADOORSINGH
              </Card.Title>
              <Card.Text className="text-center text-muted">
                FOUNDER & CHAIRMAN (SUNMAR, NEW WAVE, PENN TERRA)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={true} className="m-4 align-self-center">
          <p>
            As the founder and chairman of multiple businesses, Sunil strives
            for innovation and excels in entrepreneurial management of Sunmar
            Groups holdings. Over the past 25 years, Sunil has been actively
            involved in Sunmar’s growth strategies, strategic partnerships,
            acquisitions, and value creation. Before establishing Sunmar, Sunil
            had a very successful career with Xerox, EMC, & New Yorker. Sunil is
            both the Chairman of New Wave, dealing with manufacturing, and
            Chairman of Penn Terra Group, dealing with development and real
            estate venture
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={true} className="m-4 align-self-center">
          <Card>
            <Img fluid={data.john.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className="text-center">JOHN KINGSTON</Card.Title>
              <Card.Text className="text-center text-muted">
                (FCA, FCBV), FOUNDER & CFO (NEW WAVE, PENN TERRA)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={{ order: "first" }} className="m-4 align-self-center">
          <p>
            John spent almost 25 years in a major Chartered Accountancy firm
            initially earning his FCA designation and then specializing in
            business valuations and sourcing capital for emerging high-growth
            businesses. During this experience, John was involved in the
            valuation of several real estate development companies as well as
            the private portfolios of several major venture capital firms based
            in Ontario. He also was the Partner-in-charge of KPMG’s Toronto
            Corporate Finance and Valuation practice. John has also acted as an
            active Angel investor in several early stage ventures and has been a
            director of both public and private companies.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="m-4">
          <Card>
            <Img fluid={data.peter.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className="text-center">PETER AGNELLI</Card.Title>
              <Card.Text className="text-center text-muted">
                (MBA, BESC), CHIEF OPERATING OFFICER (NEW WAVE, PENN TERRA)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={true} className="m-4 align-self-center">
          <p>
            Peter has a long history of business strategy and operational
            improvement starting with CAP Gemini, leading consulting teams with
            Fortune 500 companies in Europe and North America. Subsequently, he
            founded, grew and eventually sold his interest in a chain of
            rehabilitation clinics in Canada. Most recently, he has been
            involved with entrepreneurial mid-size companies, operationalizing
            changes to ensure sustainable growth. In addition, he has experience
            in negotiating joint ventures and multi-year supply and development
            agreements with multi-national consumer product and private label
            companies.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Team;