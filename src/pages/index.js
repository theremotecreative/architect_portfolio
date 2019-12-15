import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./home.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="home-hero">
    {data.allWordpressWpHomeSlide.edges.map(post => (
        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className="home-hero-img" />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressWpHomeSlide {
      edges {
        node {
          content
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                    ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`