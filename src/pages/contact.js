import React from "react"
import Layout from "../components/layout.js"
import NarrowTemplate from "../components/NarrowTemplate"
import GoogleMap from "../components/GoogleMap"
import SEO from "../components/seo"

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

    </div>
    <div className="contact-map">
        <GoogleMap />
    </div>
    <div className="contact-form">

    </div>
    </NarrowTemplate>
  </Layout>
)
