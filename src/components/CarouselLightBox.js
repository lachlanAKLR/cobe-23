import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

import ArrowRight from '../images/ArrowRight_02.svg';
import ArrowLeft from '../images/ArrowLeft.svg';

const CarouselStyles = styled.div`
  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    /* transition: all ease-in-out 1s; */
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .indicators {
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }

  .indicators > button {
    margin: 5px;
  }

  .indicators > button.active {
    background-color: green;
    color: #fff;
  }
`;

export const CarouselItem = ({ children, width }) => (
  <div className="carousel-item" style={{ width }}>
    {children}
  </div>
);

const CarouselLightBox = ({ children, activeSlide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setActiveIndex(activeSlide);
  }, [activeSlide]);

  const updateIndex = (activeSlide) => {
    if (activeSlide < 0) {
      activeSlide = React.Children.count(children) - 1;
    } else if (activeSlide >= React.Children.count(children)) {
      activeSlide = 0;
    }

    setActiveIndex(activeSlide);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <CarouselStyles>
      <div
        {...handlers}
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="slide__count">
          <h3>
            {activeIndex + 1}/{React.Children.count(children)}
          </h3>
        </div>
        <div
          className="inner"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, { width: '100%' })
          )}
        </div>
        <div className="indicators">
          <button
            type="button"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </CarouselStyles>
  );
};

export default CarouselLightBox;
