import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';

const ContactStyles = styled.div`
  background-color: var(--blue);
  color: var(--green);
  min-height: 100vh;

  a {
    color: var(--green);
  }

  .bar {
    background-color: var(--green);
  }

  .contact__wrapper {
    padding: 100px 30px 30px 30px;
  }

  .contact__top {
    padding-bottom: 100px;
  }

  h5 {
    grid-column: span 3;
  }

  h4 a {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    padding-bottom: 0 !important;
    font-family: affairsRegular, Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
  }

  .info__para {
    padding-bottom: 40px;
  }

  .contact__column:nth-child(1) {
    grid-column-start: 4;
    grid-column-end: 8;
    max-width: 380px;
  }
  .contact__column:nth-child(2) {
    grid-column-start: 8;
    grid-column-end: 11;
    width: 350px;
  }

  .logo,
  .arrow,
  .dropdown__logo {
    filter: invert(48%) sepia(4%) saturate(1312%) hue-rotate(89deg) brightness(94%) contrast(96%);
  }

  .dropdown__wrapper {
    border-bottom: solid 1.5px var(--green);
  }
  footer {
    padding-top: 50px;
  }

  @media only screen and (max-width: 1100px) {
    h4 a {
      font-size: 25px;
      line-height: 30px;
    }
    .contact__wrapper {
      padding: 70px 20px 20px 20px;
    }

    .mobile__block {
      display: block;
    }

    .info__para {
      padding-bottom: 30px;
    }
    .contact__top {
      padding-bottom: 55px;
    }
    .contact__column:nth-child(1) {
      padding-bottom: 60px;
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

export default function ContactPage({ data }) {
  const { content } = data;
  const title = content.pageTitle;
  console.log(content)
  return ( 
    <ContactStyles>
      <GlobalStyles />
      <Nav title={title} />
      <div className="contact__wrapper">
        <div className="contact__top site__grid">
          <h5>Get In</h5>
          <h5>Touch</h5>
        </div>
        <div className="contact__content site__grid mobile__block">
          <div className="contact__column">
            <h4 className="info__para">{content.contactText}</h4>
            <h4>
              <a href={`mailto:${content.bookingLink}`}>Book Consultation</a>
            </h4>
            <h4>
              <a href={`mailto:${content.contactLink}`}>Email</a>
            </h4>
            <h4>
              <a href={`tel:${content.contactPhone}`}>Call</a>
            </h4>
          </div>
          <div className="contact__column">
            <h4 className="info__para">{content.socialText}</h4>
            <ul>
              <li>
                <h4>
                  <a href={content.instagramLink} target="blank">
                    Instagram
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a href={content.linkedinLink} target="blank">
                    LinkedIn
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a href={content.pinterestLink} target="blank">
                    Pinterest
                  </a>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </ContactStyles>
  );
}

export const query = graphql`
  query {
    content: sanityContact {
      pageTitle
      contactText
      contactLink
      contactPhone
      socialText
      instagramLink
      linkedinLink
      pinterestLink
      metaText
      bookingLink
    }
  }
`;
