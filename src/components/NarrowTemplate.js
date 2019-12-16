import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'

const NarrowTemplate = ({ children }) => {
  return (
    <div className="narrow-layout" style={{ 
      margin: '120px auto 0px', 
      padding: `1.45rem 1.0875rem`, 
      maxWidth: '960px' 
    }}>
      <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer style={{ padding: `1.45rem 0` }}>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://theremotecreative.com" target="_blank" rel="noopener noreferrer">The Remote Creative</a>
          {` `}
          with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          {` `}
          and
          {` `}
          <a href="https://www.wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a>
        </footer>
    </div>
  )
}

export default NarrowTemplate