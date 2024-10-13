import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { format } from 'date-fns';

import ArrowRight from '../images/ArrowRight.svg';

const PressRowStyles = styled.div`
  .press__row {
    border-top: 1px solid var(--brown);
  }

  .press__row-inner {
    padding: 60px 0;
  }

  .press__image {
    grid-column: span 2;
  }

  .press__heading {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  .press__subtitles {
    grid-column-start: 8;
    grid-column-end: 10;
  }

  .press__info {
    grid-column-start: 10;
    grid-column-end: 13;
    display: flex;
    justify-content: space-between;
  }

  /* .press__link {
    text-align: right;
  } */

  h3 {
    padding-bottom: 10px;
  }

  h4 {
    font-family: affairsItalic;
  }

  .arrow__right {
    margin-left: 5px;
  }

  @media only screen and (max-width: 1100px) {
    .press__row-inner {
      padding: 30px 0;
    }

    .press__image {
      grid-column-start: 1;
      grid-column-end: 7;
    }

    .press__heading {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: 7;
    }

    .press__subtitles {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
    }

    .press__info {
      grid-column-start: 3;
      grid-column-end: 6;
      grid-row-start: 3;
    }

    .press__link {
      display: none;
    }
  }
`;

export default function PressRow({ block, raw }) {
  const dateRaw = format(new Date(block.publishDate), 'MMMM-dd-yyyy');
  const date = dateRaw.replace(/-/g, ' ');

  return (
    <PressRowStyles>
      <div className="press__row">
        <div className="press__row-inner site__grid">
          <div className="press__image">
            <a href={block.link} target="blank">
              <GatsbyImage
                image={block.image.asset.gatsbyImageData}
                style={{
                  width: '100%',
                }}
                alt={`image of ${block.heading}`}
              />
            </a>
          </div>
          <div className="press__heading">
            <a href={block.link} target="blank">
              <h4>{block.heading}</h4>
            </a>
          </div>
          <div className="press__subtitles">
            <h3>Publication</h3>
            <h3>Date</h3>
          </div>
          <div className="press__info">
            <div className="info">
              <h3>{block.publication}</h3>
              <h3 className="style__pill">{date}</h3>
            </div>
            <div className="press__link">
              <a href={block.link} target="blank">
                <h3>
                  Link
                  <ArrowRight className="arrow__right" />
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PressRowStyles>
  );
}
