import React from "react"
import MenuLink from "./MenuLink"

export default () => (
  <ul className="mobileMenu">
    <MenuLink
      key="blog"
      to="/blog/"
    >
      Blog
    </MenuLink>
    <MenuLink
      key="portfolio"
      to="/portfolio/"
    >
      Portfolio
    </MenuLink>
  </ul>
)