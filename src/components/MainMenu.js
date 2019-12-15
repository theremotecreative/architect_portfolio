import Link from "gatsby"
import React, { Component } from "react"

class MainMenu extends Component {
  
  render() {
    return (
      <ul className="mainMenu">
        <li 
          key="blog" 
          style={{ margin: `0 10px` }} 
          className="mainMenuItem"
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
          className="mainMenuItem"
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
export default MainMenu