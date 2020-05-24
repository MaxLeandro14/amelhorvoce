import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <SEO title={post.title} />
        <section className="coluna">

            <div className="coluna-text">
              <h1 className="title-blog">{post.title}</h1>
              <div
                  key={`node.slug`}
                  dangerouslySetInnerHTML={{ __html: post.content }}
              />
        
            </div>

        </section>
      </ Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
