import React, { Component } from "react"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    console.log(currentPage)

    return (
      <div className="page">
        <h1 className="title">{currentPage.title}</h1>

        <div className="post">
          <p className="date">{currentPage.date}</p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: currentPage.content }}
          />
        </div>
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
