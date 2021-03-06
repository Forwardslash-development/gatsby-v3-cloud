import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Forwardslash Development" />
    <StaticImage
      src="../images/logo512.png"
      width={512}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby V3 Cloud App by Forwardslash Development"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
