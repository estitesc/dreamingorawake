import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';
import LightSwitchPage from '../pages/LightSwitchPage';
import DreamingOrAwakePage from '../pages/DreamingOrAwakePage';

class TechStage extends React.Component {
  constructor(props) {
    super(props);

    this.instructions = "Technology tends to work strangely or not at all in dreams.";
    this.findASwitch = "Examine this light switch, and try flipping it on and off.";
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
        // light switch image
        return <LightSwitchPage
          buttonAction={this.props.nextStep}
          dreaming = {this.props.dreaming}
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