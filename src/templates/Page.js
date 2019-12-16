import React from "react"
import { graphql } from "gatsby"
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
    }
  }
`