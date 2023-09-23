import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Carousel, { CarouselItem } from './Carousel';

const ProjectCarouselStyles = styled.div`
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

  .carousel__wrapper {
    padding: 0 30px;
    width: 100%;
  }

  .carousel__info {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .carousel__image {
    grid-column-start: 4;
    grid-column-end: 11;
  }

  .project__title {
    padding-bottom: 40px;
  }

  .indicators {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    padding: 30px;
    width: 100%;
  }

  .arrow_right {
    text-align: right;
    grid-column-start: 10;
  }

  .gatsby-image-wrapper {
    height: 600px;
    min-width: 800px;
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: flex;
      flex-direction: column-reverse;
    }

    .carousel__wrapper {
      height: 70vh;
      padding: 0 20px;
    }

    .indicators {
      padding: 20px;
      grid-template-columns: repeat(6, 1fr);
    }
    .project__title {
      padding-bottom: 30px;
    }

    .arrow_right {
      grid-column-start: 6;
    }

    .gatsby-image-wrapper {
      height: 400px;
      min-width: auto;
    }
  }
`;

function SingleProject({ children, width, project }) {
  const isComplete = project.status === true;
  const isArch = project.role === 'archi';
  const isInt = project.role === 'int';
  const isArchInt = project.role === 'archiInt';
  return (
    <CarouselItem children={children} width={width}>
      <div className="carousel__wrapper site__grid">
        <div className="carousel__info">
          <div className="project__title">
            <Link to={`/project/${project.slug.current}`}>
              <h4>{project.projectTitle}</h4>
            </Link>
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
                    {isInt ? 'Interior' : ''}
                    {isArchInt ? 'Architecture & Interior' : ''}
                  </h3>
                </li>
                <li className="style__baseline">
                  <h3
                    className={
                      isComplete ? 'style__pill' : 'style__pill dashed'
                    }
                  >
                    {isComplete ? 'Completed' : 'In Progress'}
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="carousel__image">
          <Link to={`/project/${project.slug.current}`}>
            <GatsbyImage
              loading="eager"
              image={project.featuredImage.asset.gatsbyImageData}
              alt={`image of ${project.projectTitle}`}
            />
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
}

export default function ProjectCarousel({ projects }) {
  return (
    <ProjectCarouselStyles>
      <Carousel>
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </Carousel>
    </ProjectCarouselStyles>
  );
}
