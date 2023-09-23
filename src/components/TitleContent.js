import React from 'react';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const TitleContentStyles = styled.div`
  .tc__wrapper {
    padding: 150px 30px 75px 30px;
  }
  h2 {
    grid-column: span 4;
  }
  .tc__content {
    grid-column-start: 5;
    grid-column-end: 11;
  }

  h4 {
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 1100px) {
    .tc__wrapper {
      padding: 70px 20px 20px 20px;
    }

    .site__grid {
      display: block;
    }

    h2 {
      padding-bottom: 20px;
    }
    h4 {
      padding-bottom: 10px;
    }
  }
`;

export default function TitleContent({ block, raw }) {
  return (
    <TitleContentStyles>
      <div className="tc__wrapper">
        <div className="tc__inner site__grid">
          <h2>{block.heading}</h2>
          <div className="tc__content">
            <PortableText value={raw.content} />
          </div>
        </div>
      </div>
    </TitleContentStyles>
  );
}
