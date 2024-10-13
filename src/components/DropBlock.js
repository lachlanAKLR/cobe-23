import React, { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const DropBlockStyles = styled.div`
  .dropdown__block {
    padding: 75px 30px;
  }
  .dropdown__item {
    border-bottom: 1px solid var(--black);
    padding: 60px 0;
  }
  .item__title {
    grid-column: span 5;
  }

  .item__excerpt,
  .dropdown__content {
    grid-column-start: 6;
    grid-column-end: 11;
    cursor: pointer;
  }

  .item__more {
    grid-column-start: 12;
    grid-column-end: 13;
    cursor: pointer;
  }

  h1 {
    cursor: pointer;
  }

  li:before {
    content: '•  ';
  }

  .item__inner {
    padding-bottom: 40px;
  }

  h2 {
    padding-bottom: 10px;
  }
  h4 {
    padding-bottom: 30px;
  }

  li {
    padding-bottom: 5px;
  }

  ul {
    padding-bottom: 15px;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in, opacity 0.5s ease-in;
  }

  .show {
    max-height: 3000px;
    opacity: 1;
    transition: max-height 0.5s ease-in;
    transition: opacity 0.5s ease-in 0.5s;
  }

  ul {
    text-indent: -12px;
    margin-left: 12px;
  }

  @media only screen and (max-width: 1100px) {
    .dropdown__block {
      padding: 60px 20px;
    }
    .site__grid {
      display: block;
    }

    .item__excerpt {
      display: none;
    }

    .item__more {
      display: none;
    }

    .dropdown__item {
      padding: 30px 0;
    }

    .dropdown__item:first-of-type {
      border-top: 1px solid var(--black);
    }
    h2 {
      padding-bottom: 30px;
    }
  }
`;

function DropItem({ dropdown }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="dropdown__item" onClick={handleClick}>
      <div
        className="item__inner site__grid"
        style={isActive ? { paddingBottom: +40 } : { paddingBottom: 0 }}
      >
        <div className="item__title">
          <h1>{dropdown.heading}</h1>
        </div>
        <div className="item__excerpt">
          <PortableText value={dropdown.excerpt} />
        </div>
        <div className="item__more">
          <button type="button">
            <p>{isActive ? 'Less -' : 'More +'}</p>
          </button>
        </div>
      </div>
      <div className="dropdown__content-wrapper site__grid">
        <div
          className={
            isActive ? 'dropdown__content show' : 'dropdown__content hidden'
          }
        >
          <PortableText value={dropdown.content} />
        </div>
      </div>
    </div>
  );
}

export default function DropBlock({ block, raw }) {
  return (
    <DropBlockStyles>
      <div className="dropdown__block">
        <div className="dropdown__title">
          <h2>{block.title}</h2>
        </div>
        <div className="dropdown__items">
          {raw.dropContent.map((dropdown) => (
            <DropItem key={dropdown._key} dropdown={dropdown} />
          ))}
        </div>
      </div>
    </DropBlockStyles>
  );
}
