import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const AccordionBlockStyles = styled.div`
  .accordion__block {
    padding: 30px;
  }

  .accordion__image {
    grid-column: span 3;
  }

  .accordion__items {
    grid-column-start: 5;
    grid-column-end: 13;
  }

  .accordion__heading {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    cursor: pointer;
  }

  .accordion__item {
    border-top: 1px solid black;
    padding: 30px 0;
  }

  .accordion__item {
    border-top: 1px solid black;
  }

  .accordion__item:last-of-type {
    border-bottom: 1px solid black;
  }


  .accordion__content {
    max-width: 450px;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    max-height: 0;
    opacity: 0;
  }

  .accordion__content.show {
    max-height: 1000px;
    opacity: 1;
  }

  .accordion__content-inner {
    padding: 15px 0; /* Padding for content without affecting height calculation */
  }


  @media only screen and (max-width: 1100px) {

    .site__grid {
        display: flex;
        flex-direction: column;
    }

    .accordion__block {
        padding: 20px;
    }


  }

`;

function AccordionItem({ accordion }) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="accordion__item">
      <div className="accordion__heading" onClick={handleClick}>
        <div>
          <p>{accordion.heading}</p>
        </div>
        <button type="button">
          <p>{isActive ? 'Less -' : 'More +'}</p>
        </button>
      </div>
      <div
        ref={contentRef}
        className={`accordion__content ${isActive ? 'show' : ''}`}
        style={{ maxHeight: isActive ? `${contentHeight}px` : '0px' }}
      >
        <div className="accordion__content-inner">
            <PortableText value={accordion.content} />
        </div>
      </div>
    </div>
  );
}


export default function AccordionBlock({ block, raw }) {
    console.log(block)
    return (
      <AccordionBlockStyles>
        <div className="accordion__block site__grid">
          <div className="accordion__image">
          <GatsbyImage
          image={block.image.asset.gatsbyImageData}
          alt="image of accordion block"
        />          </div>
          <div className="accordion__items">
            {raw.accordionContent.map((accordion) => (
              <AccordionItem key={accordion._key} accordion={accordion} />
            ))}
          </div>
        </div>
      </AccordionBlockStyles>
    );
  }
  



