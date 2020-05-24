const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
 

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)


  allWordpressPage.edges.forEach(edge => {
    
    createPage({
     
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {

    if(edge.node.slug == "blog"){
      createPage({
        path: `/${edge.node.slug}/`,
        component: slash(blogTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }else{
      createPage({
        path: `/${edge.node.slug}/`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
    

  })
}
