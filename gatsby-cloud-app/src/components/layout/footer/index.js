import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div
      style={{
        marginTop: `2rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `blue`,
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
