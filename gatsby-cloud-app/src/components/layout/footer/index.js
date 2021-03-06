import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => {
  return (
    <div
      style={{
        marginTop: `2rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <h1> Gatsby v3 Cloud App</h1>
      </Link>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://forwardslash-development.io">Forwardslash Development</a>
    </div>
  )
}

export default Footer
