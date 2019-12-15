import Link from "gatsby"
import React, { Component } from "react"

class MobileMenu extends Component {
  render () {
    return (
      <ul className={"mobileMenu"}>
        <li 
            key="blog" 
            style={{ margin: `0 10px` }} 
          >
          <Link 
            to="/blog/"
            style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
            >
            Blog
          </Link>
        </li>
        <li 
          key="portfolio" 
          style={{ margin: `0 10px` }} 
        >
          <Link 
            to="/portfolio/"
            style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
            >
            Portfolio
          </Link>
        </li>
      </ul>
    );
  }
}
export default MobileMenu