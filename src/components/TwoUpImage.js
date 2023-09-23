import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const TwoUpImageStyles = styled.div`
  .site__grid {
    padding: 30px;
  }
  .project__image:nth-child(1) {
    grid-column-start: 2;
    grid-column-end: 6;
  }
  .project__image:nth-child(2) {
    grid-column-start: 8;
    grid-column-end: 12;
  }

  .project__image {
    padding-bottom: 150px;
  }

  .gatsby-image-wrapper {
    height: 700px;
    min-width: 450px;
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    .project__image {
      padding-bottom: 100px;
    }

    .gatsby-image-wrapper {
      min-height: auto;
      max-height: auto;
      min-width: auto;
      height: auto;
    }
  }
`;

export default function TwoUpImage({ block, raw, handleClick, slideIndex }) {
  const { leftCaption } = block;
  const { rightCaption } = block;
  const leftImage = block.leftImage.asset.gatsbyImageData;
  const rightImage = block.rightImage.asset.gatsbyImageData;

  return (
    <TwoUpImageStyles>
      <div className="site__grid">
        <div className="project__image">
          <Image
            image={leftImage}
            caption={leftCaption}
            handleClick={handleClick}
            slideIndex={slideIndex - 1}
          />
        </div>
        <div className="project__image">
          <Image
            image={rightImage}
            caption={rightCaption}
            handleClick={handleClick}
            slideIndex={slideIndex}
          />
        </div>
      </div>
    </TwoUpImageStyles>
  );
}
