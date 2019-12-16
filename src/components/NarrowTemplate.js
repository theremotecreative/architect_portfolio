import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import Footer from "./footer"

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
        <Footer></Footer>
    </div>
  )
}

export default NarrowTemplate