import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="page">
      <h1 className="title">Gatsby Wordpress Starter</h1>

      <div className="post">
        <p className="description">
          This is your starter for a Gatsby.js project that uses Wordpress as a
          headless CMS
        </p>

        <div className="tasksContainer">
          <p>Things you need to change...</p>
          <div className="tasks">
            <ul>
              <li>Set site metadata in gatsby-config.js</li>
              <li>
                Set wordpress backend site in gatsby-config.js under
                'gatsby-source-wordpress'
              </li>
              <li>
                Change site icon in gatsby-config.js under
                'gatsby-plugin-manifest'
              </li>
              <li>Remember to add SEO tags on each page</li>
            </ul>
          </div>
        </div>

        <div className="linkList">
          <Link to="/posts/">
            <button className="btn">Posts</button>
          </Link>
          <Link to="/sample-page/">
            <button className="btn">Sample Page</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
