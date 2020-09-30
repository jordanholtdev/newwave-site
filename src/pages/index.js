import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Partners from "../components/Partners"
import About from "../components/About"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="The innovation behind the brands you know" />
    <Hero />
    <Intro/>
    <Partners />
    <About />
    <Contact />

  </Layout>
)

export default IndexPage
