import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const StudioLandingStyles = styled.div`

  padding-bottom: 140px;

  .studio__landing-inner {
    height: 100vh;
    display: flex;
  }
  .studio__column {
    width: 50%;
  }

  .studio__column:nth-child(1) {
    padding: 100px 15px 15px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .studio__column:nth-child(2) {
    padding-bottom: 30px;
  }

  h5 {
    grid-column: span 3;
  }

  .image__wrapper {
    padding-top: 180px;
    grid-column-start: 2;
    grid-column-end: 6;
  }

  .gatsby-image-wrapper {
    max-height: 700px;
  }

  .studio__intro-inner {
    grid-column: span 5;
  }

  .studio__intro-inner h4 {
    padding-bottom: 15px;
  }

  h2 {
    padding-bottom: 40px;
  }

  .mobile__image {
    display: none;
  }


  @media only screen and (max-width: 1100px) {

    padding-bottom: 0px;

    .studio__landing-inner {
      flex-direction: column;
      height: 100%;
    }
    .studio__column {
      width: 100%;
    }
    .half__grid {
      display: block;
    }
    .desktop__column {
      display: none;
    }

    .mobile__image {
      display: block;
      padding: 30px 0 40px 0;
    }

    .studio__column:nth-child(1) {
      padding: 70px 20px 20px 20px;
      display: block;
    }

    .mobile__grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
    }
  }
`;

export default function LandingContent({ content, isVision }) {
  return (
    <StudioLandingStyles>
      <div className="studio__landing">
        <div className="studio__landing-inner">
          <div className="studio__column">
          <div className="studio__title half__grid mobile__grid">
            {isVision ? (
              <>
                <h5>Regenerative <br/> & Resilient Design</h5>
              </>
            ) : (
              <>
                <h5>Studio</h5>
                <h5>Cobe</h5>
              </>
            )}
          </div>
            <div className="image__wrapper mobile__image">
              <GatsbyImage
                image={content.image.asset.gatsbyImageData}
                style={{
                  width: '100%',
                }}
                alt={`image of ${content.pageTitle}`}
              />
            </div>
            <div className="studio__intro half__grid">
              <div className="studio__intro-inner">
                <PortableText value={content._rawIntro} />
              </div>
            </div>
          </div>
          <div className="studio__column half__grid desktop__column">
            <div className="image__wrapper">
              <GatsbyImage
                image={content.image.asset.gatsbyImageData}
                style={{
                  width: '100%',
                }}
                alt={`image of ${content.pageTitle}`}
              />
            </div>
          </div>
        </div>
      </div>
    </StudioLandingStyles>
  );
}
