import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
      <SEO title="Home" keywords={[`a melhor voce`, `aprimoramento`, `positiva`]} />
        <div>
          <header className="main">
           <div className="container"> 
          <div className="row">
            <div  className="col-md-6">
              <div className="img-back">
                <img src={`../../img/Cintia-a-melhor-voce-1.png`} alt="Cintia- A melhor você" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="frase">
                <p>“Aprendi que amar não é sofrer.
                  Aprendi a viver com alguém e também sei viver só comigo.
                  Aprendi a me amar todos os dias da minha vida.”</p>
                <p className="assign">Cynthia Cunha</p>
              </div>
            </div>
          </div>
          </div>
        </header>
      
      
        <section className="box">
          <div className="container">
            <div className="row">
              <div  className="col-md-12 col-lg-6 col-sm-12">
                <div className="frase-2">
                  <p> Após muito sofrer por amar errado e por não me amar o suficiente, aprendi o que não é amor, e como podemos amar com leveza e nos priorizando. Com minhas mensagens simples e objetivas, ajudo as mulheres a  serem mais leves em seus relacionamentos (e com elas mesmas!), a desenvolverem seu amor próprio e a elevarem sua autoestima.</p>
              
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="img-back-2">
                  <img className="pull-right" src={`../../img/cintia-2.png`} alt="Cintia- A melhor você" />
                </div>
              </div>
            </div>  
          </div>    
        </section>
        <section id="ebook" className="box-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-back-4">
                  <img src={`../../img/cintia-2.png`}  alt="Cintia- A melhor você" alt="Ebook Como Ser uma Mulher Positiva" />
                </div>
              </div>
              <div className="col-md-6">
                <p className="title-book">Baixe grátis meu eBook ‘’Como Ser Uma Mulher Positiva - usando o poder das afirmações”</p>
                <form action="">
                  <label>Nome*</label>
                  <input type="text" name="" placeholder="Digite seu nome" />
                  <label>Email*</label>
                  <input type="text" name="" placeholder="Digite seu melhor email" />
                  <button type="submit" className="btn">QUERO MEU EBOOK AGORA!</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="insta folha-insta">
          <h2><a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank">Siga-me no Instagram</a></h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank" ><img src={`../../img/insta-1.jpg`} /></a>
              </div>
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta-1.jpg`} alt="" /></a>
              </div>
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta-1.jpg`} alt="" /></a>
              </div>
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta-1.jpg`} alt="" /></a>
              </div>
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta-1.jpg`} alt="" /></a>
              </div>
              <div className="col-md-4">
                <a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank"><img src={`../../img/insta-1.jpg`} alt="" /></a>
              </div>
            </div>
          </div>
          <h3><a href="https://z-p42.www.instagram.com/amelhorvoce/" target="_blank">@amelhorvoce</a></h3>
        </section>
          </div>
      </ Layout>
    )
  }
}

export default Homepage
