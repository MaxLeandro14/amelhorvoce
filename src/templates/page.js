import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends Component {
  render() {
    const data = this.props.data.allWordpressPost

    return (
      <Layout>
        <SEO title="Blog" />
          <section className="blog-container">
              <div className="">
                 <div className="container">
                  <div className="row">

                
                {data.edges.map(({ node }) => (
                      <div className="col-md-6 col-lg-4 col-sm-12" key={node.slug}>
                          <Link to={node.slug}>
                            <div className="box-not">
                            <h1 className="title-bolg">{node.title}</h1>
                            <div
                              key={`node.slug`}
                              dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            />
                            </div>
                          </Link>
                      </div>
                ))}
                      
                    </div>
                </div>
              </div>
            </section>
          <span className="back-onda"></span>
      </ Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
