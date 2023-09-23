import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const ThreeColumnStyles = styled.div`
  padding: 75px 30px;

  .column:nth-child(1) {
    grid-column: span 3;
  }

  .column:nth-child(2) {
    grid-column-start: 5;
    grid-column-end: 8;
  }

  .column:nth-child(3) {
    grid-column-start: 9;
    grid-column-end: 12;
  }

  h1 {
    padding: 40px 0 30px 0;
    cursor: pointer;
  }

  p {
    padding-bottom: 10px;
  }

  .clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .clamp p {
    padding-bottom: 0px;
  }

  button {
    padding-top: 40px;
  }

  .gatsby-image-wrapper {
    height: 250px;
    min-width: 300px;
  }

  @media only screen and (max-width: 1100px) {
    padding: 60px 20px;

    .site__grid {
      display: block;
    }
    h1 {
      padding: 30px 0 20px 0;
    }
    button {
      padding-top: 30px;
      padding-bottom: 60px;
    }

    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`;

function Column({ column, raw }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="column">
      <div className="column__inner">
        <GatsbyImage
          image={column.image.asset.gatsbyImageData}
          style={{
            width: '100%',
          }}
          alt={`image of ${column.heading}`}
        />
        <h1 onClick={handleClick}>{column.heading}</h1>
        <div className={isActive ? 'column__content' : 'column__content clamp'}>
          <PortableText value={raw.content} />
        </div>
        <button type="button" onClick={handleClick}>
          <p>{isActive ? 'Less -' : 'More +'}</p>
        </button>
      </div>
    </div>
  );
}

export default function ThreeColumn({ block, raw }) {
  return (
    <ThreeColumnStyles>
      <div className="three__column-wrapper">
        <div className="three__column-inner site__grid">
          {block.columnContent.map((column, index) => (
            <Column
              key={column._key}
              column={column}
              raw={raw.columnContent[index]}
            />
          ))}
        </div>
      </div>
    </ThreeColumnStyles>
  );
}
