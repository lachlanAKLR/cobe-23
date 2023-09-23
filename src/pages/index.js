import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Logo from '../images/Logo.svg';
import HomeText from '../components/HomeText';
import LandingAnimation from '../components/LandingAnimation';
import NavHome from '../components/NavHome';

const HomeStyles = styled.div`
  .logo {
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 30px;
    left: 30px;
    filter: invert();
  }

  .header__menu {
    grid-column: span 2;
  }

  .header__page-title {
    grid-column: span 3;
  }

  h2:nth-child(3) {
    grid-column-start: 7;
    display: block;
  }

  h2:nth-child(4) {
    grid-column-start: 9;
    display: block;
  }

  a {
    color: white;
    font-size: 18px;
  }

  .dropdown__wrapper a {
    color: black;
  }

  .gatsby-image-wrapper {
    height: 100vh;
    object-fit: cover;
  }

  .text__wrapper {
    position: fixed;
    top: 100px;
    width: 100%;
    z-index: 50;
    color: #fff;
    padding: 30px;
  }

  .text__wrapper h5 {
    grid-column: span 6;
  }

  .home__text-wrapper {
    grid-column-start: 7;
    grid-column-end: 12;
  }

  .bottom__links {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .logo {
      width: 40px;
      height: 40px;
      bottom: 20px;
      left: 20px;
    }

    .text__wrapper {
      padding: 20px;
    }

    h2:nth-child(3) a {
      display: none;
    }

    h2:nth-child(4) a {
      display: none;
    }

    .text__wrapper h5 {
      grid-column: span 3;
    }

    .home__text-wrapper {
      grid-column-start: 4;
      grid-column-end: 7;
    }
    .bottom__links {
      display: block;
      display: flex;
      gap: 30px;
      position: fixed;
      bottom: 30px;
      left: 100px;
    }
    .bottom__links h3 {
      color: white;
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>Studio CoBe — Architecture & Interior Design</title>
    <meta name="description" content={data.homeContent.metaText} />
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

export default function Home({ data }) {
  return (
    <HomeStyles>
      <GlobalStyles />
      <NavHome title="Studio Cobe" />
      <LandingAnimation />
      <HomeText />
      <div className="home__image-wrapper">
        <div className="home__image">
          <GatsbyImage
            image={data.homeContent.image.asset.gatsbyImageData}
            alt="Home Image"
          />
        </div>
      </div>
      <div className="bottom__content">
        <Logo className="logo" />
        <div className="bottom__links">
          <a href="https://www.instagram.com/studio_cobe/?hl=en" target="blank">
            <h3>Instagram</h3>
          </a>
          <a href="https://www.linkedin.com/company/studiocobe/" target="blank">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </HomeStyles>
  );
}

export const query = graphql`
  query {
    homeContent: sanityHome {
      words
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      pageTitle
      metaText
    }
  }
`;
