import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../images/Logo.svg';
import ArrowUp from '../images/ArrowUp.svg';

const FooterStyles = styled.div`
  padding: 130px 30px 70px 30px;
  width: 100%;

  .logo {
    width: 45px;
    height: 45px;
  }

  .footer__column {
    grid-column: span 2;
  }

  .footer__column:nth-child(4) {
    grid-column: span 3;
  }

  @media only screen and (max-width: 1100px) {
    padding: 100px 20px 40px 20px;
    width: 100%;

    .logo {
      width: 30px;
      height: 30px;
    }

    h3 {
      padding-bottom: 10px;
    }

    .footer__column {
      grid-column: span 1;
    }

    .footer__column:nth-child(2),
    .footer__column:nth-child(3) {
      grid-column: span 2;
    }

    .footer__column:nth-child(4) {
      grid-column-start: 2;
      grid-column-end: 7;
    }

    .footer__column:nth-child(5) {
      grid-column-start: 2;
      grid-column-end: 7;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <footer className="footer">
        <div className="footer__inner site__grid">
          <div className="footer__column">
            <Logo className="logo" />
          </div>
          <div className="footer__column">
            <ul>
              <li>
                <Link to="/">
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <h3>Projects</h3>
                </Link>
              </li>
              <li>
                <Link to="/studio">
                  <h3>Studio</h3>
                </Link>
              </li>
              <li>
                <Link to="/press">
                  <h3>Press</h3>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <h3>Contact</h3>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/studio_cobe/?hl=en"
                  target="blank"
                >
                  <h3>Instagram</h3>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/studiocobe/"
                  target="blank"
                >
                  <h3>LinkedIn</h3>
                </a>
              </li>
              <li>
                <a href="https://pin.it/2HeMhGh" target="blank">
                  <h3>Pinterest</h3>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Studio Cobe, {new Date().getFullYear()}</h3>
            <a href="https://www.aklr.xyz/" target="blank">
              <h3>Design & Build by AKLR</h3>
            </a>
          </div>
          <div className="footer__column">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              <h3>
                <ArrowUp className="arrow" /> Back to Top
              </h3>
            </button>
          </div>
        </div>
      </footer>
    </FooterStyles>
  );
}
