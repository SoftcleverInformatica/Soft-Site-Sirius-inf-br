import React from 'react'

import PropTypes from 'prop-types'

const SolucoesLEFT = (props) => {
  return (
    <>
      <div className={`solucoes-left-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="solucoes-left-image"
        />
        <div className="solucoes-left-container">
          <h2 className="solucoes-left-text">{props.title}</h2>
          <span className="solucoes-left-text1">{props.description}</span>
          <button className="solucoes-left-button button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .solucoes-left-feature-card {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .solucoes-left-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucoes-left-container {
            height: 180px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .solucoes-left-text {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .solucoes-left-text:hover {
            text-decoration: underline;
          }
          .solucoes-left-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .solucoes-left-text1:hover {
            text-decoration: underline;
          }
          .solucoes-left-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucoes-left-root-class-name1 {
            width: 100%;
          }
          .solucoes-left-root-class-name2 {
            width: 80vw;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name3 {
            width: 100%;
          }
          .solucoes-left-root-class-name4 {
            width: 100%;
          }
          .solucoes-left-root-class-name6 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name7 {
            width: 100%;
          }
          .solucoes-left-root-class-name8 {
            width: 100%;
          }
          .solucoes-left-root-class-name9 {
            width: 100%;
          }
          .solucoes-left-root-class-name10 {
            width: 100%;
          }
          .solucoes-left-root-class-name11 {
            width: 100%;
          }
          @media (max-width: 991px) {
            .solucoes-left-image {
              margin-bottom: 0px;
            }
            .solucoes-left-container {
              margin-right: 0px;
            }
            .solucoes-left-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .solucoes-left-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .solucoes-left-feature-card {
              width: var(--dl-size-size-xxlarge);
              align-items: center;
              border-radius: 16px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucoes-left-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: 0px;
              align-self: center;
              min-height: auto;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            .solucoes-left-container {
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .solucoes-left-text {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .solucoes-left-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .solucoes-left-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .solucoes-left-root-class-name3 {
              align-self: center;
            }
            .solucoes-left-root-class-name4 {
              align-self: center;
            }
            .solucoes-left-root-class-name7 {
              align-self: center;
            }
            .solucoes-left-root-class-name8 {
              align-self: center;
            }
            .solucoes-left-root-class-name9 {
              align-self: center;
            }
            .solucoes-left-root-class-name10 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .solucoes-left-image {
              min-width: 0px;
            }
            .solucoes-left-root-class-name11 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

SolucoesLEFT.defaultProps = {
  image_src: '/playground_assets/comercio-varejista-1500w.webp',
  button: 'SAIBA MAIS',
  rootClassName: '',
  title: 'Lorem ipsum',
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

SolucoesLEFT.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default SolucoesLEFT
