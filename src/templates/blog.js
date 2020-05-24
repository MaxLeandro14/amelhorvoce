import React, { Component } from "react"
import { graphql } from "gatsby"

class Blog extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
      
		   <h1>Blog Post Template</h1>
		 
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
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
