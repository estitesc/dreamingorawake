import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';
import DreamingOrAwakePage from '../pages/DreamingOrAwakePage';

class TechStage extends React.Component {
  constructor(props) {
    super(props);

    // Could the text randomization happen here instead? setting an initial variable for this?

    this.instructions = "Technology tends to work strangely or not at all in dreams.";
    this.findASwitch = "Find a light switch near you, and try flipping it on and off.";
    this.nowTryIt = "Now try it:";
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
          text = {this.findASwitch}
          buttonAction={this.props.nextStep} 
        />;
      case 2:
        // nose check image
        return <StaticTextPage 
          text = {this.nowTryIt}
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

export default TechStage;