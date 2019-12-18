import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import NarrowTemplate from "../components/NarrowTemplate"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <NarrowTemplate>
    <h1>{data.wordpressPage.title}</h1>
    <Img sizes={data.wordpressPage.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPage.title} style={{ maxHeight: 450, marginBottom: '1.45rem' }} />
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </NarrowTemplate>
  </Layout>
)
export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
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
`