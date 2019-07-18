import React, { Component } from "react"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    console.log(post)
    return (
      <div className="page">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`
