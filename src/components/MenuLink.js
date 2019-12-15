import React from "react"
import { Link } from "gatsby"

const MenuLink = ({ to, key, children }) => (
  <li
    key={key}
    style={{ margin: `0 10px` }} 
    className="mainMenuItem"
  >
    <Link 
      to={to}
      style={{ color: `#000`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
      >
      {children}
    </Link>
  </li>
)

export default MenuLink