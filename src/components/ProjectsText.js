import React, { Component } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';

const texts = [
  'Substance',
  'Purpose',
  'Togetherness',
  'Focus',
  'Longevity',
  'Proportion',
  'Adaptability',
  'Uniqueness',
];

class ProjectsText extends Component {
  state = {
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
    customIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textIndex: this.state.textIndex + 1,
      });
    }, 4500);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <div className="text__wrapper site__grid">
        <h5>Spaces of</h5>
        <div className="home__text-wrapper">
          <ReactTextTransition
            children={texts[this.state.textIndex % texts.length]}
            springConfig={presets.slow}
            className="home__text"
            delay={3000}
          />
        </div>
      </div>
    );
  }
}

export default ProjectsText;
