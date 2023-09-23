import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Plus from '../images/Plus.svg';

const ImageStyles = styled.div`
  .image__icon {
    position: relative;
    top: 50px;
    left: calc(100% - 40px);
    z-index: 90;
    width: 20px;
    height: 20px;
  }

  .image__caption {
    padding-top: 15px;
    opacity: 0;
    transition: all ease 0.5s;
  }

  .image__button:hover + .image__caption {
    opacity: 1;
  }

  @media only screen and (max-width: 1100px) {
    .image__icon {
      top: 20px;
      left: calc(100% - 30px);
      z-index: 90;
      width: 10px;
      height: 10px;
    }

    svg {
      height: 10px;
    }

    .image__caption {
      display: none;
    }
  }
`;

export default function Image({ image, caption, handleClick, slideIndex }) {
  return (
    <ImageStyles>
      <div className="image__icon-wrapper">
        <div className="image__icon">
          <button type="button" onClick={() => handleClick(slideIndex)}>
            <Plus />
          </button>
        </div>
        <button
          type="button"
          className="image__button"
          onClick={() => handleClick(slideIndex)}
        >
          <GatsbyImage image={image} alt={`image of ${caption}`} />
        </button>
        <div className="image__caption">
          <h3>{caption}</h3>
        </div>
      </div>
    </ImageStyles>
  );
}
