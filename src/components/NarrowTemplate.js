import React from "react"

const NarrowTemplate = ({ children }) => {
  return (
    <div className="narrow-layout" style={{ margin: '120px auto 35px', padding: `1.45rem 1.0875rem`, maxWidth: '960px' }}>{children}</div>
  )
}

export default NarrowTemplate