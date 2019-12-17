import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import NarrowTemplate from "../components/NarrowTemplate"
import SEO from "../components/seo"
import { FaSearch } from 'react-icons/fa'

const ProjectTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressWpProject.title} description={data.wordpressWpProject.excerpt} />
    <NarrowTemplate>
    <h1>{data.wordpressWpProject.title}</h1>
    <Img sizes={data.wordpressWpProject.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpProject.title} style={{ maxHeight: 450 }} />
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressWpProject.content }} />
    
    
    </NarrowTemplate>
  </Layout>
)
export default ProjectTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressWpProject(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      categories {
        name
        slug
      }
      acf {
        project_gallery {
          title
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                src
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
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