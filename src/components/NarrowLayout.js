import React from "react"

const NarrowLayout = ({ children }) => {
  return (
    <div className="narrow-layout" style={{ margin: '0 auto', maxWidth: '960px' }}>{children}</div>
  )
}

export default NarrowLayout