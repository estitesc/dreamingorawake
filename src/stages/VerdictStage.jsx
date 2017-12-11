import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';

class VerdictStage extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.dreaming) {
      if(this.props.verdict == 'dreaming') {
        // dreaming / correct
        this.feedbackText = "yes - that's right. looks like dream.";
      } else {
        // dreaming / incorrect
        this.feedbackText = "sorry you were actually dreaming.";
      }
    } else {
      if(this.props.verdict == 'awake') {
        // awake / correct
        this.feedbackText = "yeah - appears you are awake.";
      } else {
        // awake / incorrect
        this.feedbackText = "not a bad assumption to make, but in this case it looked like you were awake.";
      }
    }
  }

  render() {
    return (
      <div className="main">
        <StaticTextPage 
          text = {this.feedbackText}
          buttonLabel = "AGAIN"
          buttonAction={this.props.startOver} 
        />
      </div>
    );
  }
}

export default VerdictStage;