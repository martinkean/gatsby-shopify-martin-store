import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

function IndexPage() {
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
        <ProductGrid />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </>
  )
}

export default IndexPage
