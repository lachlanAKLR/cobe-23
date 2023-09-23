import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Layouts from '../components/Layouts';

const PressStyles = styled.div`
  border-bottom: 1px solid black;
  .press__wrapper {
    padding: 100px 30px 0 30px;
  }
  h5 {
    grid-column: span 3;
    padding-bottom: 60px;
  }
  h5:nth-child(2) {
    grid-column: span 5;
  }

  @media only screen and (max-width: 1100px) {
    .press__wrapper {
      padding: 70px 20px 0 20px;
    }
    h5:nth-child(2) {
      grid-column: span 3;
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>Studio CoBe — Architecture & Interior Design</title>
    <meta name="description" content={data.content.metaText} />
    <meta property="og:title" content="Studio CoBe" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Architecture & Interior Design" />
    <meta
      property="og:image"
      content="https://i.ibb.co/y425N3S/Social-Share.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function PressPage({ data }) {
  const { content } = data;
  const title = content.pageTitle;
  const layouts = content.pressArticles;
  const _rawLayouts = content._rawPressArticles;
  return (
    <>
      <GlobalStyles />
      <Nav title={title} />
      <PressStyles>
        <div className="press__wrapper">
          <div className="press_inner">
            <div className="press__top site__grid">
              <h5>Out in</h5>
              <h5>the World</h5>
            </div>
            <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
          </div>
        </div>
      </PressStyles>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    content: sanityPress {
      pageTitle
      metaText
      _rawPressArticles
      pressArticles {
        _key
        _type
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        heading
        publication
        publishDate
        link
      }
    }
  }
`;
