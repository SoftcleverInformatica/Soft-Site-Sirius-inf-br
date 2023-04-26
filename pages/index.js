import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BotesWHATSCTT from '../components/botes-whats-ctt'
import LogoIcone from '../components/logo-icone'
import Videos from '../components/videos'
import CategoriaSolucaoVarejo from '../components/categoria-solucao-varejo'
import CategoriaSolucaoAtacado from '../components/categoria-solucao-atacado'
import CategoriaSolucaoIndustria from '../components/categoria-solucao-industria'
import CategoriaSolucaoFiscal from '../components/categoria-solucao-fiscal'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta property="og:title" content="Soft Clever" />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="home-hero">
          <div className="home-container1">
            <h1 className="home-text">Soft Clever</h1>
            <span className="home-text01">
              <span>Mais de 12.000 usuários atendidos.</span>
              <br></br>
              <span>Desenvolvemos soluções desde 1994.</span>
              <br></br>
              <span>Somos indicados por centenas de contadores.</span>
              <br></br>
            </span>
            <BotesWHATSCTT></BotesWHATSCTT>
          </div>
          <img
            alt="image"
            src="https://img.freepik.com/free-photo/man-with-laptop-sitting-table_23-2147800022.jpg"
            loading="eager"
            className="home-image"
          />
          <LogoIcone rootClassName="logo-icone-root-class-name"></LogoIcone>
        </div>
        <div className="home-gallery-card">
          <div className="home-container2">
            <h1 className="home-heading">
              <span>
                Desenvolvido para
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text09">você</span>
            </h1>
            <span className="home-text10">
              <span>
                A gestão empresarial para seu negócio nunca foi tão fácil.
              </span>
              <br></br>
              <span>Temos sistemas para micro, pequena e média empresa.</span>
            </span>
            <BotesWHATSCTT rootClassName="botes-whatsctt-root-class-name"></BotesWHATSCTT>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJ1c2luZXNzcGVyc29ufGVufDB8fHx8MTY4MTEzMzU1MQ&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="lazy"
            className="home-image1"
          />
        </div>
        <Videos></Videos>
        <div className="home-features">
          <h1 className="home-text14">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="home-container3">
            <Link href="/solucao-varejo">
              <a>
                <CategoriaSolucaoVarejo
                  rootClassName="categoria-solucao-varejo-root-class-name"
                  className="home-component3"
                ></CategoriaSolucaoVarejo>
              </a>
            </Link>
            <Link href="/solucao-atacado--distribuicao">
              <a>
                <CategoriaSolucaoAtacado
                  rootClassName="categoria-solucao-atacado-root-class-name"
                  className="home-component4"
                ></CategoriaSolucaoAtacado>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a>
                <CategoriaSolucaoIndustria
                  rootClassName="categoria-solucao-industria-root-class-name"
                  className="home-component5"
                ></CategoriaSolucaoIndustria>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a>
                <CategoriaSolucaoFiscal
                  Image_src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1N3x8ZmluYW5jZXxlbnwwfHx8fDE2ODI0MzM2MjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="home-component6"
                ></CategoriaSolucaoFiscal>
              </a>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container1 {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 10%;
            padding-right: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text01 {
            margin-top: var(--dl-space-space-twounits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image {
            width: 50%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-gallery-card {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              0deg,
              rgb(0, 0, 0) 0%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .home-container2:hover {
            opacity: 1;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 0px;
          }
          .home-text09 {
            color: #3d3b73;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            z-index: 100;
            font-size: 16px;
            align-self: center;
            text-align: center;
            line-height: 2;
            padding-top: var(--dl-space-space-twounits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-image1 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: #f9f7f2;
          }
          .home-text14 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .home-container3 {
            width: 100%;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-component3 {
            text-decoration: none;
          }
          .home-component4 {
            text-decoration: none;
          }
          .home-component5 {
            text-decoration: none;
          }
          .home-component6 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-container {
              justify-content: flex-start;
            }
            .home-hero {
              width: 100%;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .home-container1 {
              width: 100%;
              height: 80vh;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .home-text {
              color: #ffffff;
              text-align: center;
            }
            .home-text01 {
              color: #ffffff;
              margin-top: var(--dl-space-space-fourunits);
              text-align: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .home-gallery-card {
              height: 50vh;
              align-items: center;
              justify-content: flex-start;
            }
            .home-container2 {
              height: 100%;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              font-size: 2rem;
              font-style: normal;
              font-weight: 700;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .home-text09 {
              color: #3d3b73;
            }
            .home-text10 {
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container1 {
              width: 100%;
              margin-right: 0px;
              justify-content: center;
            }
            .home-gallery-card {
              height: 400px;
            }
            .home-container2 {
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text14 {
              text-align: center;
            }
            .home-container3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: 0px;
              padding-left: 0;
              padding-right: 0;
              padding-bottom: 0px;
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-gallery-card {
              height: 450px;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              font-size: 2rem;
              align-self: center;
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              color: #3d3b73;
            }
            .home-text10 {
              color: var(--dl-color-gray-white);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
