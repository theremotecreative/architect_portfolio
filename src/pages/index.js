import React from "react"
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./home.css"

const IndexPage = ({ data }) => (
  <Layout className="fixed-header">
    <SEO title="Home" />
    <PageTransition>
    <div className="home-hero">
    {data.allWordpressWpHomeSlide.edges.map(post => (
        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className="home-hero-img" />
      ))}
    </div>
    </PageTransition>
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