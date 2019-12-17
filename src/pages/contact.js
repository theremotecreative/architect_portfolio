import React from "react"
import Layout from "../components/layout.js"
import NarrowTemplate from "../components/NarrowTemplate"
import GoogleMap from "../components/GoogleMap"
import SEO from "../components/seo"
import { FaBeer } from 'react-icons/fa'

export default () => (
    <Layout>
    <SEO
      title="Contact"
      description="Contact Us to Learn More"
      keywords={[`Architecture`, `Contact`, `Map`]}
    />
    <NarrowTemplate>
    <h1>Contact Us</h1>
    <div className="contact-info">
        <h3> Lets go for a <FaBeer />? </h3>
    </div>
    <div className="contact-map">
        <GoogleMap />
    </div>
    <div className="contact-form">

    </div>
    </NarrowTemplate>
  </Layout>
)
