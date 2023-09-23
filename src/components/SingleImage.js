import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const SingleImageStyles = styled.div`
  .site__grid {
    padding: 30px;
  }
  .landscape {
    grid-column-start: 3;
    grid-column-end: 11;
  }

  .landscape__large {
    grid-column-start: 2;
    grid-column-end: 12;
  }
  .portrait {
    grid-column-start: 5;
    grid-column-end: 9;
  }
  .project__image {
    padding-bottom: 150px;
  }

  .gatsby-image-wrapper {
    max-height: 800px;
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
  }
`;

export default function SingleImage({ block, raw, handleClick, slideIndex }) {
  const image = block.image.asset.gatsbyImageData;
  const { caption } = block;
  const isPortrait = block.format;
  const firstLayout = slideIndex === 0;
  const firstLayoutStyle = firstLayout ? 'landscape__large' : 'landscape';
  return (
    <SingleImageStyles>
      <div className="site__grid">
        <div
          className={
            isPortrait
              ? 'project__image portrait'
              : `project__image ${firstLayoutStyle}`
          }
        >
          <Image
            className="single__image"
            image={image}
            caption={caption}
            handleClick={handleClick}
            slideIndex={slideIndex}
          />
        </div>
      </div>
    </SingleImageStyles>
  );
}
