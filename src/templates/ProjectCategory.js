import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"
import "../pages/portfolio.css"

const ProjectCategoryTemplate = ({ data }) => (
			<Layout className="portfolio-page">
        <SEO title={`Project Category: ${data.wordpressCategory.name}`} keywords={[`Architecture`, `Grid`, `Portfolio`]} />
        <WideTemplate>
        <div class="masonry">
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
        </div>
        </WideTemplate>
			</Layout>
)
export default ProjectCategoryTemplate;
export const query = graphql`
	query($id: Int!) {
        wordpressCategory(wordpress_id: { eq: $id }) {
            wordpress_id
            name
            slug
        }
        allWordpressWpProject(filter: {categories: {elemMatch: {wordpress_id: { eq: $id }}}}) {
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
                          }
                      }
                    }
                  }
                }
              }
        }
	}
`