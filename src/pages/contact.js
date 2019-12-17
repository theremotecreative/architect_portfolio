import React from "react"
import Layout from "../components/layout.js"
import NarrowTemplate from "../components/NarrowTemplate"
import GoogleMap from "../components/GoogleMap"
import SEO from "../components/seo"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import './contact.css'

export default () => (
    <Layout>
    <SEO
      title="Contact"
      description="Contact Us to Learn More"
      keywords={[`Architecture`, `Contact`, `Map`]}
    />
    <NarrowTemplate>
      <div className="contact-box">
        <div className="contact-left">
          <div className="contact-map">
            <GoogleMap />
          </div>
        </div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <div className="contact-card">
              <FaMapMarkerAlt />
              <h3>123 Address St.<br/>City, St 12345</h3>
            </div>
            <div className="contact-card">
              <FaEnvelope />
              <h3>demo@email.com</h3>
            </div>
            <div className="contact-card">
              <FaPhone />
              <h3>(123) 456-7890</h3>
            </div>
          </div>
          <div className="contact-form">

          </div>
        </div>
      </div>
    </NarrowTemplate>
  </Layout>
)
