import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ArrowLeft from '../images/ArrowLeft.svg';

const ProjecTitleStyles = styled.div`
  h1 {
    font-family: affairsItalic;
  }
  .project__title-wrapper {
    padding: 100px 30px 60px 30px;
    background-color: var(--cream);
  }
  .project__title {
    grid-column-start: 2;
    grid-column-end: 7;
  }
  .project__details {
    grid-column-start: 7;
    grid-column-end: 13;
    display: block;
  }

  li {
    padding-bottom: 10px;
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

  .project__back h3 {
    position: absolute;
    left: 10%;
    top: 32.5px;
    z-index: 100;
  }
  .project__back svg {
    margin-right: 10px;
    position: relative;
    bottom: -2px;
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: flex;
      flex-direction: column;
    }

    .project__title-wrapper {
      padding: 70px 20px 60px 20px;
    }

    .project__back h3 {
      top: 20px;
    }
    .project__back h3 {
      left: 16%;
    }
    .row {
      gap: 20px;
    }
    .row__right {
      width: calc(100% - 115px);
    }
  }
`;

export default function ProjectTitle({ data }) {
  const { project } = data;
  const isComplete = project.status === true;
  const isArch = project.role === 'archi';
  const isInt = project.role === 'int';
  const isArchInt = project.role === 'archiInt';
  const isBuilder = project.builder !== null;

  return (
    <ProjecTitleStyles>
      <div className="project__back">
        <Link to="/projects">
          <h3>
            <ArrowLeft />
            Back
          </h3>
        </Link>
      </div>
      <div className="project__title-wrapper site__grid">
        <div className="project__title">
          <h1>{project.projectTitle}</h1>
        </div>
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
              <h3 className={isComplete ? 'style__pill' : 'style__pill dashed'}>
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
      </div>

      {/* <div className="column">
            <ul>
              <li />
              <li>
                <h3>Status</h3>
              </li>
              <li>
                <h3>Delivery</h3>
              </li>
              {isBuilder
                ? React.createElement(
                    'li',
                    {},
                    React.createElement('h3', {}, `Builder`)
                  )
                : ` `}
              {isBuilder
                ? React.createElement(
                    'div',
                    { className: 'row__right' },
                    React.createElement('h3', {}, `${project.builder}`)
                  )
                : ` `}
              <li>
                <h3>Image Credit</h3>
              </li>
            </ul>
          </div> */}
      {/* <div className="column">
            <ul>
              <li>
                <h3>
                  {isArch ? 'Architecture' : ''}
                  {isInt ? 'Interior Design' : ''}
                  {isArchInt ? 'Architecture & Interior Design' : ''}
                </h3>
              </li>
              <li className="style__baseline">
                <h3
                  className={isComplete ? 'style__pill' : 'style__pill dashed'}
                >
                  {isComplete ? 'Completed' : 'In Progress'}
                </h3>
              </li>
              <li>
                <h3>{project.year}</h3>
              </li>
              {isBuilder
                ? React.createElement(
                    'li',
                    {},
                    React.createElement('h3', {}, `${project.builder}`)
                  )
                : ` `}
              <li>
                <h3>{project.photoCredit}</h3>
              </li>
            </ul>
          </div> */}
    </ProjecTitleStyles>
  );
}
