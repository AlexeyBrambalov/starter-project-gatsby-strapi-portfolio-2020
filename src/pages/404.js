import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
// import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>ooops it's the 404 page</h1>
          <Link tlo="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
