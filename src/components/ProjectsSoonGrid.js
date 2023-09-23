import React, { useState } from 'react';

import styled from 'styled-components';
import SoonIcon from '../images/Soon.svg';

const ProjectsSoonGridStyles = styled.div`
  .projects__grid-inner {
    padding: 100px 30px;
  }
  h4 {
    font-family: affairsItalic;
  }
  .project__title-wrapper {
    padding: 100px 30px 60px 30px;
    background-color: var(--cream);
  }

  .project__details {
    display: flex;
    gap: 30px;
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

  .project__title {
    padding: 0 0 30px 0;
  }

  .projects__title {
    grid-column: span 2;
  }

  .projects__grid {
    grid-column: span 10;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 100px 30px;
  }
  .single__project-wrapper:nth-child(odd) {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .single__project-wrapper:nth-child(even) {
    grid-column-start: 6;
    grid-column-end: 10;
  }

  .projects__title h2 {
    max-width: 130px;
  }

  .single__image {
    position: relative;
    top: 0;
    bottom: 0;
    cursor: pointer;
  }

  .first__image {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .hover__image {
    position: absolute;
    top: 0;
    bottom: 0;
    display: block;
    z-index: 1;
  }

  .show {
    opacity: 1;
    transition: all 0.25s ease-in-out;
  }

  .close {
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  .gatsby-image-wrapper {
    height: 600px;
    min-width: 400px;
  }

  svg {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: flex;
      flex-direction: column;
    }

    .projects__grid-inner {
      padding: 60px 20px;
    }

    .projects__grid {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    .hover__image {
      display: none;
    }

    .gatsby-image-wrapper {
      height: 500px;
      min-width: auto;
    }
  }
`;

function SingleProject({ project }) {
  const [open, setOpen] = useState(false);
  const isArch = project.role === 'archi';
  const isInt = project.role === 'int';
  const isArchInt = project.role === 'archiInt';
  return (
    <div className="single__project-wrapper">
      <div className="single__project-inner">
        <div className="single__info">
          <div className="project__title">
            <SoonIcon />
            <h4>{project.projectTitle}</h4>
          </div>
          <div className="project__details">
            <div className="column">
              <ul>
                <li>
                  <h3>Role</h3>
                </li>
                <li>
                  <h3>Status</h3>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <h3>
                    {isArch ? 'Architecture' : ''}
                    {isInt ? 'Interior Design' : ''}
                    {isArchInt ? 'Architecture & Interior Design' : ''}
                  </h3>
                </li>
                <li className="style__baseline">
                  <h3 className="style__pill dashed">Coming Soon</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSoonGrid({ projects, title }) {
  return (
    <ProjectsSoonGridStyles>
      <div className="projects__grid-inner site__grid">
        <div className="projects__title">
          <h2>{title}</h2>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </ProjectsSoonGridStyles>
  );
}
