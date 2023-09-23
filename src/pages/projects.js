import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectsSoonGrid from '../components/ProjectsSoonGrid';
import ProjectsText from '../components/ProjectsText';

const ProjectsStyles = styled.div`
  background-color: var(--cream);

  .text__wrapper {
    width: 100%;
    z-index: 50;
    padding: 100px 30px 70px 30px;
  }

  .text__wrapper h5 {
    grid-column: span 3;
  }

  .home__text-wrapper {
    grid-column: span 5;
  }

  .bottom__links {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .text__wrapper {
      padding: 70px 20px 30px 20px;
    }

    .text__wrapper h5 {
      grid-column: span 3;
    }

    .home__text-wrapper {
      grid-column: span 3;
    }
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

export default function ProjectsPage({ data }) {
  const title = 'Projects';
  const completedProjects = data.completedProjects.nodes;
  const progressProjects = data.progressProjects.nodes;
  const featuredProjects = data.featuredProjects.nodes;
  const soonProjects = data.soonProjects.nodes;

  return (
    <ProjectsStyles>
      <GlobalStyles />
      <Nav title={title} />
      <ProjectsText />
      <ProjectCarousel projects={featuredProjects} />
      <ProjectsGrid projects={completedProjects} title="Completed Projects" />
      <ProjectsGrid projects={progressProjects} title="Projects in Progress" />
      <ProjectsSoonGrid projects={soonProjects} title="Coming Soon" />
      <Footer />
    </ProjectsStyles>
  );
}

export const query = graphql`
  query {
    projects: allSanityProject {
      nodes {
        projectTitle
        role
        status
        photoCredit
        year
        colour
        id
        slug {
          current
        }
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
      }
    }
    featuredProjects: allSanityProject(
      filter: { featured: { eq: true } }
      sort: { fields: [order], order: ASC }
    ) {
      nodes {
        order
        projectTitle
        role
        status
        photoCredit
        year
        colour
        id
        slug {
          current
        }
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
      }
    }
    completedProjects: allSanityProject(
      filter: { status: { eq: true } }
      sort: { fields: [order], order: ASC }
    ) {
      nodes {
        order
        projectTitle
        role
        status
        id
        slug {
          current
        }
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
      }
    }
    progressProjects: allSanityProject(
      filter: { status: { ne: true } }
      sort: { fields: [order], order: ASC }
    ) {
      nodes {
        order
        projectTitle
        role
        status
        id
        slug {
          current
        }
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
      }
    }
    soonProjects: allSanitySoonProject {
      nodes {
        projectTitle
        role
        id
      }
    }
    content: sanityHome {
      metaText
    }
  }
`;
