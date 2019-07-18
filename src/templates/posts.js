import React, { Component } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

class PostTemplate extends Component {
  render() {
    const data = this.props.data.allWordpressPost
    const posts = data.edges.map(({ node }) => (
      <div key={node.slug} className="post">
        <Link className="title" to={"/posts/" + node.slug}>
          <h3 className="title">{node.title}</h3>
        </Link>
        <p className="date">{node.date}</p>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </div>
    ))

    return (
      <div className="page">
        <SEO title="Posts" />
        <h1>Posts</h1>

        {posts}
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
