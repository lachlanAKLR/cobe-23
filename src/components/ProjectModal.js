import React, { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const ProjectModalStyles = styled.div`
  h1 {
    font-family: affairsItalic;
  }
  .project__title-wrapper {
    padding: 100px 30px 0 30px;
  }
  .project__title {
    grid-column-start: 2;
    grid-column-end: 7;
  }

  li {
    padding-bottom: 10px;
  }

  .style__pill {
    position: relative;
    bottom: 2px;
  }

  .style__baseline {
    padding-bottom: 6px;
  }

  .modal__details {
    padding-bottom: 60px;
  }

  .row {
    display: flex;
    gap: 30px;
    padding: 2.5px 0;
  }

  .row__left {
    width: 115px;
  }

  .style__pill {
    position: relative;
    bottom: 3px;
  }

  .style__baseline {
    position: relative;
    top: 3px;
  }
  .modal__wrapper {
    border-top: 1.5px solid black;
    width: 100%;
    max-height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 91;
    padding: 15px 30px 30px 30px;
    transition: all 1s ease-out;
  }

  .active {
    max-height: 1000px;
    padding: 15px 30px 50px 30px;
    transition: all 1s ease-in;
  }

  .modal__column:nth-child(1) {
    grid-column: span 5;
  }
  .modal__column:nth-child(2) {
    grid-column-start: 7;
    grid-column-end: 12;
  }

  .modal__awards h3,
  .modal__column:nth-child(2) h3 {
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 15px;
  }
  .pink {
    background-color: var(--skin);
  }
  .blue {
    background-color: var(--blue);
  }

  .modal__button {
    padding-bottom: 60px;
  }

  .plus {
    position: relative;
    bottom: 2px;
  }

  @media only screen and (max-width: 1100px) {
    .modal__wrapper {
      overflow: scroll;
      height: 100vh;
      z-index: 9999;
      padding: 15px 20px 30px 20px;
      transition: max-height 0s;
    }

    .active {
      top: 0;
    }

    .site__grid {
      display: flex;
      flex-direction: column;
    }

    .modal__button {
      padding-bottom: 40px;
    }

    .modal__details {
      padding-bottom: 40px;
    }
    .row {
      gap: 20px;
    }
    .row__right {
      width: calc(100% - 115px);
    }
  }
`;

function Award({ award }) {
  return <p>{award.award}</p>;
}

export default function ProjectModal({ data }) {
  const { project } = data;
  const isComplete = project.status === true;
  const isPink = project.colour === true;
  const isArch = project.role === 'archi';
  const isInt = project.role === 'int';
  const isArchInt = project.role === 'archiInt';
  const isAward = project.awards.length > 0;
  const [isActive, setIsActive] = useState(false);
  const activeColor = isPink ? '#F7D7C0' : '#EAF0F4';
  const isBuilder = project.builder !== null;

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <ProjectModalStyles>
      <div
        className={isActive ? 'modal__wrapper active' : 'modal__wrapper'}
        style={{
          backgroundColor: isActive ? `${activeColor}` : '#F7F0E7',
        }}
      >
        <button onClick={handleClick} type="button">
          <h3 className="modal__button">
            Project Information{' '}
            <span className="plus">{isActive ? '-' : '+'}</span>
          </h3>
        </button>
        <div className="modal__inner site__grid">
          <div className="modal__column">
            <div className="project__details">
              <div className="row">
                <div className="row__left">
                  <h3>Role</h3>
                </div>
                <div className="row__right">
                  <h3>
                    {isArch ? 'Architecture' : ''}
                    {isInt ? 'Interior Design' : ''}
                    {isArchInt ? 'Architecture & Interior Design' : ''}
                  </h3>
                </div>
              </div>
              <div className="row style__baseline">
                <div className="row__left">
                  <h3>Status</h3>
                </div>
                <div className="row__right">
                  <h3
                    className={
                      isComplete ? 'style__pill' : 'style__pill dashed'
                    }
                  >
                    {isComplete ? 'Completed' : 'In Progress'}
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <h3>Delivery</h3>
                </div>
                <div className="row__right">
                  <h3>{project.year}</h3>
                </div>
              </div>
              {isBuilder
                ? React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                      'div',
                      { className: 'row__left' },
                      React.createElement('h3', {}, `Builder`)
                    ),
                    React.createElement(
                      'div',
                      { className: 'row__right' },
                      React.createElement('h3', {}, `${project.builder}`)
                    )
                  )
                : ` `}
              <div className="row">
                <div className="row__left">
                  <h3>Image Credit</h3>
                </div>
                <div className="row__right">
                  <h3>{project.photoCredit}</h3>
                </div>
              </div>
            </div>
            <div className="modal__awards">
              <h3>{isAward ? 'Awards' : ''}</h3>
              <div>
                {project.awards.map((award) => (
                  <Award key={award._key} award={award} />
                ))}
              </div>
            </div>
          </div>
          <div className="modal__column">
            <PortableText value={project._rawContent} />
          </div>
        </div>
      </div>
    </ProjectModalStyles>
  );
}
