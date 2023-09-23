import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import ProjectTitle from '../components/ProjectTitle';
import Layouts from '../components/Layouts';
import ProjectModal from '../components/ProjectModal';
import LightBoxModal from '../components/LightBoxModal';
import MoreProjects from '../components/MoreProjects';

const ProjectStyles = styled.div`
  background-color: var(--cream);
`;

export const Head = ({ data }) => (
  <>
    <title>Studio CoBe — Architecture & Interior Design</title>
    <meta name="description" content={data.project.metaText} />
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

export default function ProjectPage({ data }) {
  const moreProjects = data.moreProjects.nodes;
  const { layouts } = data.project;
  const { _rawLayouts } = data.project;
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClick = (i) => {
    setIsActive(!isActive);
    setIndex(i);
  };
  return (
    <ProjectStyles>
      <GlobalStyles />
      <Nav title="" />
      <ProjectTitle data={data} />
      <ProjectModal data={data} />
      <Layouts
        layouts={layouts}
        _rawLayouts={_rawLayouts}
        handleClick={handleClick}
      />
      <LightBoxModal
        layouts={layouts}
        active={isActive}
        activeSlide={index}
        handleClick={handleClick}
        data={data}
      />
      <MoreProjects moreProjects={moreProjects} data={data} />
      <Footer />
    </ProjectStyles>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      projectTitle
      role
      id
      builder
      featured
      status
      photoCredit
      year
      colour
      metaText
      awards {
        _key
        _type
        award
      }
      featuredImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      thumbnailImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawContent
      _rawLayouts
      layouts {
        ... on SanitySingleImage {
          _key
          _type
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          caption
          format
        }
        ... on SanityTwoUpImage {
          _key
          _type
          leftImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          leftCaption
          rightImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          rightCaption
        }
      }
    }
    moreProjects: allSanityProject {
      nodes {
        thumbnailImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        thumbnailImageHover {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        slug {
          current
        }
        id
        projectTitle
        role
        status
      }
    }
  }
`;
