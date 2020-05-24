import React from "react"
import { Link } from "gatsby"


function Menu () {
	const mobileBtn = React.createRef();
	const mobileMenu = React.createRef();
	
	function ativar(){
		let texto = mobileBtn.current;
		let back = mobileMenu.current;
		texto.classList.toggle('active')
		back.classList.toggle('active')
	
	}
	

	return (
	  <>
	  	<span onClick={() => ativar() } className={` mobile-btn`} ref={mobileBtn} id="mobile-btn"></span>
	    <ul ref={mobileMenu} id="menu" className="menu">
	    	<li><Link to="/">Início</Link></li>
	    	<li><Link to="/#ebook">Ebook</Link></li>
	    	<li><Link to="/blog/">Blog</Link></li>
			<li><a href="#">Siga-me</a>
				<ul>
					<li><a href="https://www.facebook.com/amelhorvoce" target="_blank">Facebook</a></li>
					<li><a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank">Instagram</a></li>
				</ul>
			</li>
		</ul>
	  </>
  	)
}

export default Menu
