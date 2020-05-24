import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Menu from "./menu"


const HEADER_QUERY =  graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Header = () => (

	<StaticQuery
    query={HEADER_QUERY}
    render={data => {

      return (
  <>
    <nav>
		<div className="container">
			<label className="logo" ><Link to="/"><img src={`../../img/logo-a_melhor_voce.png`} alt="logo A Melhor Você" /></Link></label>
			<Menu />
		</div>
	</nav>
  </>
  )
    }}
  />
)

export default Header
