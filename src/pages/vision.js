import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import LandingContent from '../components/LandingContent';
import Layouts from '../components/Layouts';

const VisionStyles = styled.div`
  background-color: var(--green);




  .dropdown__wrapper {
    background-color: var(--green);
  }

  .tc__wrapper {
    padding-top: 20px;
  }

`;

export const Head = ({ data }) => (
  <>
    <title>Studio CoBe — Architecture & Interior Design</title>
    <meta property="og:title" content="Studio CoBe" />
    <meta name="description" content={data.content.metaText} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Architecture & Interior Design" />
    <meta
      property="og:image"
      content="https://i.ibb.co/y425N3S/Social-Share.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function VisionPage({ data }) {
  const { content } = data;
  const title = content.pageTitle;
  const { layouts, _rawLayouts } = content;
  const isVision = true;

  return ( 
   <VisionStyles>
        <GlobalStyles/>
            <Nav title={title} />
              <LandingContent content={content} isVision={isVision}/>
            <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
            <Footer/>
   </VisionStyles>
  );
}

export const query = graphql`
  query {
    content: sanityVision {
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
        ... on SanityAccordionBlock {
          _key
          _type
          accordionContent {
            _key
            heading
            content {
              _key
              _type
              children {
                _key
                text
                marks
              }
            }
          }
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
