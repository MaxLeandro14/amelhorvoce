import React from "react"

const Footer = () => (
  <>
    <footer className="rodape">
		<div className="rodape-back-1">
			<div className="social">
				<ul >
					<li className="folha-rodape-dir"><a href="https://www.facebook.com/amelhorvoce" target="_blank"><img src={`../../img/face.png`} alt="Logo Facebook" /></a></li>
					<li className="folha-rodape-esq"><a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta.png`} alt="Logo Instagram" /></a></li>
				</ul>
			</div>
		</div>
		<div className="rodape-back-2">
			<p><strong>&copy; 2020 Todos os direitos reservados.</strong></p>
		</div>
	</footer>
  </>
)

export default Footer
