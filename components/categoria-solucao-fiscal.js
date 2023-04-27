import React from 'react'

import PropTypes from 'prop-types'

const CategoriaSolucaoFiscal = (props) => {
  return (
    <>
      <div
        className={`categoria-solucao-fiscal-categoria-solucao-fiscal ${props.rootClassName} `}
      >
        <div className="categoria-solucao-fiscal-container">
          <h2 className="categoria-solucao-fiscal-text">{props.heading}</h2>
          <span className="categoria-solucao-fiscal-text1">{props.text}</span>
          <button className="categoria-solucao-fiscal-button button">
            {props.button}
          </button>
        </div>
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          loading="lazy"
          className="categoria-solucao-fiscal-image"
        />
      </div>
      <style jsx>
        {`
          .categoria-solucao-fiscal-categoria-solucao-fiscal {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .categoria-solucao-fiscal-container {
            height: 180px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .categoria-solucao-fiscal-text {
            color: var(--dl-color-gray-000000);
            align-self: flex-end;
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .categoria-solucao-fiscal-text:hover {
            text-decoration: underline;
          }
          .categoria-solucao-fiscal-text1 {
            color: var(--dl-color-gray-000000);
            align-self: flex-end;
            text-align: right;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-fiscal-text1:hover {
            text-decoration: underline;
          }
          .categoria-solucao-fiscal-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-fiscal-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }

          @media (max-width: 991px) {
            .categoria-solucao-fiscal-container {
              margin-right: 0px;
            }
            .categoria-solucao-fiscal-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-fiscal-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .categoria-solucao-fiscal-image {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .categoria-solucao-fiscal-categoria-solucao-fiscal {
              width: var(--dl-size-size-xxlarge);
              box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .categoria-solucao-fiscal-container {
              order: 1;
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .categoria-solucao-fiscal-text {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-fiscal-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .categoria-solucao-fiscal-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .categoria-solucao-fiscal-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: auto;
              align-self: center;
              min-height: auto;
            }
            .categoria-solucao-fiscal-root-class-name {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

CategoriaSolucaoFiscal.defaultProps = {
  text: 'Sped ICMS, IPI, Pis e Cofins e Bloco K completo.',
  heading: 'Fiscal',
  Image_alt: 'Fiscal',
  Image_src:
    'https://www.remessaonline.com.br/blog/wp-content/uploads/2021/01/bloggif_5ff493acd7925.jpeg.webp',
  button: 'SAIBA MAIS',
  rootClassName: '',
}

CategoriaSolucaoFiscal.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  Image_alt: PropTypes.string,
  Image_src: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CategoriaSolucaoFiscal
