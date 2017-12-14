import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';

class VerdictStage extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.dreaming) {
      if(this.props.verdict == 'dreaming') {
        // dreaming / correct
        this.feedbackText = "yes - that's right. this does feel a bit like a dream.";
      } else {
        // dreaming / incorrect
        this.feedbackText = "hm. what you just saw should have made you wonder if you were dreaming.";
      }
    } else {
      if(this.props.verdict == 'awake') {
        // awake / correct
        this.feedbackText = "yeah - it seems like you are awake.";
      } else {
        // awake / incorrect
        this.feedbackText = "it's always safer to assume you are dreaming, but in this case you may have been awake.";
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