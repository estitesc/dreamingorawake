import React, { Component } from 'react';
import IntroStage from './stages/IntroStage';
import TextStage from './stages/TextStage';
import NoseStage from './stages/NoseStage';
import TechStage from './stages/TechStage';
import VerdictStage from './stages/VerdictStage';
import './styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: this.props.stage,
      step: this.props.step,
      dreaming: false,
      text: "",
      verdict: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.startOver = this.startOver.bind(this);
    this.selectStage = this.selectStage.bind(this);
    this.selectVerdict = this.selectVerdict.bind(this);
  }

  nextStep() {
    this.setState({step: this.state.step + 1});
  }

  selectStage(stage) {
    // For now in the nose stage we are always awake
    let dreaming = false;
    if(Math.random() >= 0.5 && stage != "nose") {
      dreaming = true;
    }

    this.setState({
      stage: stage,
      step: 0,
      dreaming: dreaming
    });
  }

  selectVerdict(verdict) {
    this.setState({
      stage: "verdict",
      verdict: verdict
    });
  }

  startOver() {
    this.setState({
      stage: "intro",
      step: 1
    });
  }

  toRender() {
    switch(this.state.stage) {
      case "intro":
       return <IntroStage 
          step={this.state.step} 
          nextStep={this.nextStep} 
          selectStage={this.selectStage} 
        />
      case "text":
        return <TextStage 
          step={this.state.step} 
          nextStep={this.nextStep}
          dreaming={this.state.dreaming}
          selectVerdict={this.selectVerdict}
        />
      case "nose":
        return <NoseStage 
          step={this.state.step} 
          nextStep={this.nextStep}
          selectVerdict={this.selectVerdict}
        />
      case "tech":
        return <TechStage
          step={this.state.step} 
          nextStep={this.nextStep}
          dreaming={this.state.dreaming}
          selectVerdict={this.selectVerdict}
        />
      case "verdict":
        return <VerdictStage 
          dreaming={this.state.dreaming} 
          verdict={this.state.verdict}
          startOver={this.startOver}
        />
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

export default Main;