import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


import Logo from '../images/Logo.svg';
import Press from '../images/Press.svg';
import Projects from '../images/Projects.svg';
import Studio from '../images/Studio.svg';
import Contact from '../images/Contact.svg';
import Vision from '../images/Soon.svg';


const NavStyles = styled.div`
  .header__nav {
    padding: 30px;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
  }
  .bar {
    position: relative;
    display: block;
    width: 15px;
    height: 2px;
    margin: 3px auto;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    background-color: #000000;
  }
  .hidden {
    opacity: 0;
  }

  .header__menu {
    grid-column: span 3;
    display: flex;
    gap: 8px;
  }

  .header__page-title {
    grid-column: span 5;
  }

  .header__hamburger {
    padding-top: 1.5px;
  }

  .bar-top {
    transform: rotate(0deg);
    top: 0;
  }

  .bar-bottom {
    transform: rotate(0deg);
    top: 0;
  }

  .cross-top {
    transform: rotate(-45deg);
    position: relative;
    top: 5px;
  }

  .cross-bottom {
    position: relative;
    top: -5px;
    transform: rotate(45deg);
  }

  .dropdown__logo {
    width: 45px;
    height: 45px;
    shape-rendering: geometricPrecision;
  }

  .dropdown__wrapper {
    padding: 30px;
    background-color: var(--cream);
    width: 100%;
    height: 385px;
    position: fixed;
    top: -100%;
    border-bottom: solid 1.5px var(--black);
    transition: all 1s ease-in-out 0.5s;
    z-index: 95;
  }

  .dropdown__active {
    top: 0%;
    transition: all 1s ease-in-out;
  }

  .dropdown__column {
    opacity: 0;
    padding-top: 55px;
    grid-column: span 2;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.5s ease-in-out 0s;
  }

  .dropdown__visible {
    opacity: 1;
    transition: all 0.5s ease-in-out 1s;
  }

  .dropdown__visible:nth-child(2) {
    opacity: 1;
    transition: all 0.5s ease-in-out 1.1s;
  }

  .dropdown__visible:nth-child(3) {
    opacity: 1;
    transition: all 0.5s ease-in-out 1.2s;
  }

  .dropdown__visible:nth-child(4) {
    opacity: 1;
    transition: all 0.5s ease-in-out 1.3s;
  }

  .dropdown__visible:nth-child(5) {
    opacity: 1;
    transition: all 0.5s ease-in-out 1.4s;
  }

  h1 {
    padding-bottom: 20px;
  }

  .header__button h2,
  .header__page-title {
    position: relative;
    top: 1.5px;
  }

  @media only screen and (max-width: 1100px) {
    .header__nav {
      padding: 20px;
    }

    .header__menu {
      grid-column: span 1;
    }

    .header__page-title {
      padding-top: 2px;
      grid-column-start: 4;
      grid-column-end: 7;
    }

    .header__button {
      display: none;
      pointer-events: none;
    }
    .dropdown__inner p {
      display: none;
    }

    .mobile__column {
      display: flex;
      flex-direction: column;
      justify-content: auto;
      gap: 0;
    }

    .dropdown__wrapper {
      padding: 75px 20px 20px 20px;
    }

    h1 {
      padding-bottom: 0;
    }

    .dropdown__column {
      padding-top: 0;
      padding-bottom: 25px;
      height: auto;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      gap: 20px;
    }

    .dropdown__logo {
      width: 30px;
      height: 30px;
    }
  }
`;

function Header({ title, instagram, email }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="header__wrapper">
      <div className="header__nav site__grid">
        <div className="header__menu">
          <button
            type="button"
            onClick={handleClick}
            className="header__hamburger"
          >
            <span className={isActive ? 'bar cross-top' : 'bar bar-top'} />
            <span className={isActive ? 'bar hidden' : 'bar'} />
            <span
              className={isActive ? 'bar cross-bottom' : 'bar bar-bottom'}
            />
          </button>
          <button
            type="button"
            className="header__button"
            onClick={handleClick}
          >
            <h2>{isActive ? 'close' : 'menu'}</h2>
          </button>
        </div>
        <h2 className="header__page-title">{isActive ? '' : `${title}`}</h2>
      </div>
      <div
        className={
          isActive ? 'dropdown__wrapper dropdown__active' : 'dropdown__wrapper'
        }
      >
        <div className="dropdown__inner site__grid mobile__column">
          <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link to="/">
                <h1 className="nav">Home</h1>
              </Link>
              <p>Spaces of substance</p>
            </div>
            <Link to="/">
              <div className="dropdown__icon">
                <Logo className="dropdown__logo" />
              </div>
            </Link>
          </div>
          <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link fade to="/projects">
                <h1 className="nav">Projects</h1>
              </Link>
              <p>
                Residential and commercial work including architecture and
                interior design.
              </p>
            </div>
            <Link fade to="/projects">
              <div className="dropdown__icon">
                <Projects className="dropdown__logo" />
              </div>
            </Link>
          </div>
          <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link fade to="/studio">
                <h1 className="nav">Studio</h1>
              </Link>
              <p>
                Our profile including our unique studio approach and process.
              </p>
            </div>
            <Link fade to="/studio">
              <div className="dropdown__icon">
                <Studio className="dropdown__logo" />
              </div>
            </Link>
          </div>
          {/* <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link fade to="/vision">
                <h1 className="nav">Vision</h1>
              </Link>
              <p>Our approach to regenerative design, sustainability and how we embed into all our projects.</p>
            </div>
            <Link fade to="/vision">
              <div className="dropdown__icon">
                <Vision className="dropdown__logo" />
              </div>
            </Link>
          </div> */}
          <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link fade to="/contact">
                <h1 className="nav">Contact</h1>
              </Link>
              <p>Get in touch with us about your project.</p>
            </div>
            <Link fade to="/contact">
              <div className="dropdown__icon">
                <Contact className="dropdown__logo" />
              </div>
            </Link>
          </div>
          <div
            className={
              isActive
                ? 'dropdown__column dropdown__visible'
                : 'dropdown__column'
            }
          >
            <div className="dropdown__top">
              <Link fade to="/press">
                <h1 className="nav">Press</h1>
              </Link>
              <p>Studio CoBe projects out and about in the world.</p>
            </div>
            <Link fade to="/press">
              <div className="dropdown__icon">
                <Press className="dropdown__logo" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav({ title }) {
  return (
    <NavStyles>
      <Header title={title} />
    </NavStyles>
  );
}
