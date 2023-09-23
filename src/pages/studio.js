import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import LandingContent from '../components/LandingContent';
import Layouts from '../components/Layouts';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const StudioStyles = styled.div`
  background-color: var(--blue);
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

export default function StudioPage({ data }) {
  const { content } = data;
  const { layouts, _rawLayouts } = content;
  const title = content.pageTitle;
  return (
    <StudioStyles>
      <GlobalStyles />
      <Nav title={title} />
      <LandingContent content={content} />
      <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
      <Footer />
    </StudioStyles>
  );
}

export const query = graphql`
  query {
    content: sanityStudio {
      _rawLayouts
      pageTitle
      _rawIntro
      metaText
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      layouts {
        ... on SanityThreeColumn {
          _key
          _type
          title
          columnContent {
            _key
            heading
            image {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        ... on SanityTitleContent {
          _key
          _type
          heading
        }
        ... on SanityDropBlock {
          _key
          _type
          title
          dropContent {
            _key
            heading
          }
        }
      }
    }
  }
`;
