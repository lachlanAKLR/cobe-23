import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';

import landingAnimation from '../assets/animations/Logo_Rotate.json';

const LandingAnimationStyles = styled.div`
  .animation__wrapper {
    height: 100vh;
    width: 100%;
    background-color: var(--burgundy);
    position: fixed;
    z-index: 10000;
  }

  .animation__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 1s all ease;
  }

  .animation__container {
    height: 250px;
    width: 250px;
  }

  .hidden {
    opacity: 0;
    transition: 1s all ease;
    pointer-events: none;
  }

  @media only screen and (max-width: 1100px) {
    .animation__container {
      height: 150px;
      width: 150px;
    }
  }
`;

export default function LandingAnimation() {
  const animationContainer = React.createRef();
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: landingAnimation,
      loop: false,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive((current) => !current);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingAnimationStyles>
      <div
        className={
          isActive ? 'animation__wrapper hidden' : 'animation__wrapper'
        }
      >
        <div className="animation__inner">
          <div className="animation__container" ref={animationContainer} />
        </div>
      </div>
    </LandingAnimationStyles>
  );
}
