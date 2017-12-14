import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';
import NoseImagePage from '../pages/NoseImagePage';
import DreamingOrAwakePage from '../pages/DreamingOrAwakePage';

class NoseStage extends React.Component {
  constructor(props) {
    super(props);

    this.instructions = "Using a signal from your own body is the most reliable way to check if you are dreaming.";
    this.sayOutLoud = "Say this out loud: 'If I pinch my nose shut and can still breath through it, I must be in a dream.'";
  }

  toRender() {
    switch(this.props.step) {
      case 0:
        // instructions
        return <StaticTextPage 
          text = {this.instructions}
          buttonAction={this.props.nextStep} 
        />;
      case 1:
        // instructions 2
        return <StaticTextPage 
          text = {this.sayOutLoud}
          buttonAction={this.props.nextStep} 
        />;
      case 2:
        // nose check image
        return <NoseImagePage
          buttonAction={this.props.nextStep} 
        />;
      case 3:
        return <DreamingOrAwakePage
          buttonAction={this.props.selectVerdict} 
        />;
    }
  }

  render() {
    return (
      <div className="main">
        { this.toRender() }
      </div>
    );
  }
}

export default NoseStage;