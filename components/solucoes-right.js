import React from 'react'

import PropTypes from 'prop-types'

const SolucoesRIGHT = (props) => {
  return (
    <>
      <div className={`solucoes-right-feature-card ${props.rootClassName} `}>
        <div className="solucoes-right-container">
          <h2 className="solucoes-right-text">{props.title}</h2>
          <span className="solucoes-right-text1">{props.description}</span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="solucoes-right-image"
        />
      </div>
      <style jsx>
        {`
          .solucoes-right-feature-card {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .solucoes-right-container {
            width: auto;
            height: 180px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .solucoes-right-text {
            align-self: flex-end;
            font-style: normal;
            margin-top: 0px;
            text-align: center;
            font-weight: 500;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucoes-right-text1 {
            color: var(--dl-color-gray-000000);
            align-self: flex-end;
            text-align: right;
            line-height: 1.5;
          }
          .solucoes-right-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucoes-right-root-class-name {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name1 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name2 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name3 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name4 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name5 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name6 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name7 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name8 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name9 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name11 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-right-root-class-name12 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          @media (max-width: 991px) {
            .solucoes-right-container {
              margin-left: 0px;
            }
            .solucoes-right-text1 {
              text-align: right;
            }
            .solucoes-right-image {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .solucoes-right-feature-card {
              flex-direction: column;
            }
            .solucoes-right-container {
              order: 2;
              height: auto;
              align-self: center;
              align-items: center;
              margin-right: 0px;
              justify-content: flex-start;
            }
            .solucoes-right-text {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-right-text1 {
              align-self: center;
              text-align: left;
            }
            .solucoes-right-image {
              align-self: center;
            }
            .solucoes-right-root-class-name1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-right-root-class-name6 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-right-root-class-name7 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucoes-right-root-class-name8 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-right-root-class-name9 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucoes-right-root-class-name11 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucoes-right-root-class-name12 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .solucoes-right-text1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

SolucoesRIGHT.defaultProps = {
  image_alt: 'image',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_src: '/playground_assets/comercio-varejista-200h.webp',
  rootClassName: '',
}

SolucoesRIGHT.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolucoesRIGHT