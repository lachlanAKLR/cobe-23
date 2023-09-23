import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CarouselLightBox, { CarouselItem } from './CarouselLightBox';

import Cross from '../images/Cross.svg';

const LightBoxModalStyles = styled.div`
  padding: 30px;

  .carousel {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transition: 1s all ease 0.25s;
    ${(props) =>
      props.active
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
            transition: 0s all ease 0s;
          `};
    ${(props) =>
      props.active
        ? css`
            visibility: visible;
          `
        : css`
            visibility: hidden;
          `};
  }

  .carousel__close {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10001;
    cursor: pointer;
  }

  .slide__count {
    position: fixed;
    top: 26px;
    right: 15.5%;
  }

  .lightbox__info {
    position: fixed;
    top: 26px;
    left: 30px;
    z-index: 10000;
    width: 50%;
    display: flex;
  }

  .carousel__close,
  .lightbox__info,
  .modal__date {
    opacity: 0;
    pointer-events: none;
    transition: 0s all ease 0s;
  }

  .show {
    opacity: 1;
    pointer-events: all;
    transition: 1s all ease 0.25s;
  }

  .lightbox__info h3 {
    width: 50%;
  }

  .modal__caption-wrapper {
    padding: 0 30px;
    position: fixed;
    bottom: 80px;
  }

  .modal__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .modal__image-wrapper {
    /* height: 100%; */
    align-items: center;
    padding: 0 30px;
  }

  .modal__image-inner {
    display: flex;
    justify-content: center;
  }

  .indicators {
    position: fixed;
    top: 50%;
    width: 100%;
  }

  .landscape {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  .portrait {
    grid-column-start: 5;
    grid-column-end: 9;
    min-width: 600px;
  }

  .modal__date {
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 10000;
  }

  .carousel-item {
    position: relative;
  }

  .gatsby-image-wrapper img {
    height: calc(100vh - 150px);
  }

  .modal__caption-wrapper {
    position: absolute;
    bottom: 30px;
  }

  .image__caption {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .lightbox__info,
    .modal__date {
      display: none;
    }

    .modal__caption-wrapper {
      padding: 0 20px;
      bottom: 145px;
    }

    .indicators > button {
      margin: 5px 0;
    }

    .indicators {
      bottom: 0;
      top: auto;
      padding: 10px 20px;
    }

    .carousel__close {
      top: 15px;
      right: 15px;
    }

    .carousel__close svg {
      width: 20px;
    }

    .slide__count {
      left: 20px;
      top: 20px;
      right: auto;
    }

    .site__grid {
      display: block;
    }

    .modal__image-wrapper {
      padding: 0;
      position: absolute;
      left: 0;
      top: calc(50% - 45px);
      transform: translate(0, -50%);
    }

    .modal__wrapper {
      display: block;
    }

    .portrait {
      min-width: auto;
    }

    .gatsby-image-wrapper img {
      height: auto;
      width: 100vw;
      max-height: 500px;
    }

    .modal__caption-wrapper {
      left: 0px;
      width: 100%;
      white-space: normal;
    }
  }
`;

function ProjectImage({ layout, children, width }) {
  const singleImage = layout._type === 'singleImage';
  const isPortrait = layout.format;

  if (singleImage) {
    return (
      <CarouselItem children={children} width={width}>
        <div className="modal__wrapper">
          <div className="modal__image-wrapper site__grid">
            <div
              className={
                isPortrait
                  ? 'modal__image-inner portrait'
                  : 'modal__image-inner landscape'
              }
            >
              <GatsbyImage
                image={layout.image.asset.gatsbyImageData}
                alt="image"
                className="image"
              />
            </div>
          </div>
          <div className="modal__caption-wrapper">
            <div className="modal__caption">
              <h3>{layout.caption}</h3>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  }

  return (
    <>
      <CarouselItem children={children} width={width}>
        <div className="modal__wrapper">
          <div className="modal__image-wrapper site__grid">
            <div className="modal__image-inner portrait">
              <GatsbyImage
                image={layout.leftImage.asset.gatsbyImageData}
                alt="image"
              />
            </div>
          </div>
          <div className="modal__caption-wrapper">
            <div className="modal__caption">
              <h3>{layout.leftCaption}</h3>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem children={children} width={width}>
        <div className="modal__wrapper">
          <div className="modal__image-wrapper site__grid">
            <div className="modal__image-inner portrait">
              <GatsbyImage
                image={layout.rightImage.asset.gatsbyImageData}
                alt="image"
              />
            </div>
          </div>
          <div className="modal__caption-wrapper">
            <div className="modal__caption">
              <h3>{layout.rightCaption}</h3>
            </div>
          </div>
        </div>
      </CarouselItem>
    </>
  );
}

export default function LightBoxModal({
  layouts,
  active,
  handleClick,
  activeSlide,
  data,
}) {
  const { project } = data;
  const [flatLayout, setFlatLayout] = useState([]);
  const isArch = project.role === 'archi';
  const isInt = project.role === 'int';
  const isArchInt = project.role === 'archiInt';
  const isActive = active === true;

  useEffect(() => {
    let _uniqueCounter = 0;
    const _flattenedLayout = layouts.map((layout) => {
      if (layout.leftImage) {
        return [
          {
            format: layout.format,
            image: layout.leftImage,
            caption: layout.rightCaption,
            _key: `${layout._key}${_uniqueCounter++}`,
            _type: 'singleImage',
          },
          {
            format: layout.format,
            image: layout.rightImage,
            caption: layout.rightCaption,
            _key: `${layout._key}${_uniqueCounter++}`,
            _type: 'singleImage',
          },
        ];
      }

      return { ...layout };
    });

    setFlatLayout([].concat(..._flattenedLayout));
  }, [layouts]);

  return (
    <LightBoxModalStyles active={active}>
      <div className={isActive ? 'lightbox__info show' : 'lightbox__info'}>
        <h3>{project.projectTitle}</h3>
        <h3>
          {isArch ? 'Architecture' : ''}
          {isInt ? 'Interior' : ''}
          {isArchInt ? 'Architecture & Interior' : ''}
        </h3>
      </div>
      <button
        type="button"
        className={isActive ? 'carousel__close show' : 'carousel__close'}
        onClick={() => handleClick(0)}
      >
        <Cross />
      </button>
      <CarouselLightBox activeSlide={activeSlide}>
        {flatLayout.map((layout) => (
          <ProjectImage
            key={layout._key}
            layout={layout}
            activeSlide={activeSlide}
          />
        ))}
      </CarouselLightBox>
      <div className={isActive ? 'modal__date show' : 'modal__date'}>
        <h3>Studio Cobe, {new Date().getFullYear()}</h3>
      </div>
    </LightBoxModalStyles>
  );
}
