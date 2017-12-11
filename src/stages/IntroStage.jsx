import * as React from 'react';
import WelcomePage from '../pages/WelcomePage';
import TrickPickPage from '../pages/TrickPickPage';

class IntroStage extends React.Component {
  constructor(props) {
    super(props);
  }

  toRender() {
    switch(this.props.step) {
      case 0:
        return <WelcomePage buttonAction={this.props.nextStep} />;
      case 1:
        return <TrickPickPage stageSelectAction={this.props.selectStage} />;
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

export default IntroStage;