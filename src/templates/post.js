import React, { Component } from "react"
// import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    let resolutions
    post.featured_media
      ? (resolutions =
          post.featured_media.localFile.childImageSharp.resolutions)
      : (resolutions = null)
    console.log(post)
    return (
      <div className="page">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h3>{post.acf.facebook}</h3>
        <h3>{post.acf.twitter}</h3>
        {resolutions && <img src={resolutions.src} alt="" />}
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
      acf {
        facebook
        twitter
      }
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 300, height: 300) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`
