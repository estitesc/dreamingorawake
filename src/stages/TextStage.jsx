import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';
import DreamingOrAwakePage from '../pages/DreamingOrAwakePage';

class TextStage extends React.Component {
  constructor(props) {
    super(props);

    //Could the text randomization happen here instead? setting an initial variable for this?
    let potentialRandStrangs = []
    potentialRandStrangs[0] = "gibli";
    potentialRandStrangs[1] = "grumbledore";
    potentialRandStrangs[2] = "godzooks";

    this.strang = potentialRandStrangs[Math.floor(Math.random() * 3)];

    this.instructions = "Text tends to be unstable in dreams. Study the text on the next page, then press 'hide'";
    this.holdInMind = "Hold that in your mind, and compare it to the text that appears on the next page."

    this.counterStrang = this.strang;
    if(this.props.dreaming) {
      this.counterStrang = "garbled elfant";
    }
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
        // show the text
        return <StaticTextPage 
          text = {this.strang}
          buttonAction={this.props.nextStep} 
        />;
      case 2:
        // instructions 2
        return <StaticTextPage 
          text = {this.holdInMind}
          buttonAction={this.props.nextStep} 
        />;
      case 3:
        // show potentially dreamified text
        return <StaticTextPage 
          text = {this.counterStrang}
          buttonAction={this.props.nextStep} 
        />;
      case 4:
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

export default TextStage;