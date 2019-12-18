import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from "../components/layout"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"
import "./portfolio.css"

const PortfolioPage = ({ data }) => (
  <Layout className="portfolio-page">
    <SEO title="Portfolio" keywords={[`Architecture`, `Grid`, `Portfolio`]} />
    <WideTemplate>
    <Masonry>
    {data.allWordpressWpProject.edges.map(post => (
        <div className="masonry-item">
          <Link to={`/project/${post.node.slug}`} className="masonry-item-link" >
            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className="masonry-item-img" />
            <div className="text-panel">
              <div className="text-cell">
                <h3>
                  {post.node.title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Masonry>
    </WideTemplate>
  </Layout>
)

const Masonry = styled.div`
  column-count: 3;
  column-gap: 1em;
  transition-duration: .3s;
  @media (max-width:1000px) {
    column-count: 2;
  }
  @media (max-width:500px) {
    column-count: 1;
  }

`

export default PortfolioPage

export const query = graphql`
  query {
    allWordpressWpProject {
      edges {
        node {
          title
          slug
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                    ...GatsbyImageSharpSizes
                    src
                  }
              }
            }
          }
        }
      }
    }
  }
`