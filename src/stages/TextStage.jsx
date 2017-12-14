import * as React from 'react';
import StaticTextPage from '../pages/StaticTextPage';
import DreamTextPage from '../pages/DreamTextPage';
import DreamingOrAwakePage from '../pages/DreamingOrAwakePage';

class TextStage extends React.Component {
  constructor(props) {
    super(props);

    //Could the text randomization happen here instead? setting an initial variable for this?
    let strangs = []
    strangs[0] = "I am a dreamer, I walk in two worlds";
    strangs[1] = "Dreaming is seeing without believing";
    strangs[2] = "How you hang a halibut is all you have to die for";
    strangs[3] = "He came out of nothingness, took form, was loved, was always bound to return to nothingness";
    strangs[4] = "You may say I'm a dreamer, but I'm a lucid dreamer.";
    strangs[5] = "Watching the sunset fizzle into the misty horizon";
    strangs[6] = "Super profundo on the early eve of your day";
    strangs[7] = "All night the dark buds of dreams open richly. In the center of every petal is a letter, and you imagine";
    strangs[8] = "Should have been a pair of ragged claws, scuttling across the floors of silent seas.";
    strangs[9] = "if you could only remember and string them all together they would spell the answer.";
    strangs[10] = "All that we see or seem Is but a dream within a dream.";
    strangs[11] = "We are such stuff as dreams are made on, and our little life is rounded with a sleep.";
    strangs[12] = "A dream itself is but a shadow.";
    strangs[13] = "If we shadows have offended, think but this and all is mended, that you have but slumber’d here, while these visions did appear";

    this.strang = strangs[Math.floor(Math.random() * strangs.length)];

    this.instructions = "Text in dreams is unstable and tends to lose meaning. Study the text on the next page.";
    this.holdInMind = "When you are ready to re-examine the text press ok."
  }

  toRender() {
    switch(this.props.step) {
      case 0:
        // instructions
        return <StaticTextPage 
          text = {this.instructions}
          buttonAction = {this.props.nextStep} 
        />;
      case 1:
        // show the text
        return <DreamTextPage 
          text = {this.strang}
          buttonAction = {this.props.nextStep}
          initial = {true}
        />;
      case 2:
        // instructions 2
        return <StaticTextPage 
          text = {this.holdInMind}
          buttonAction = {this.props.nextStep} 
        />;
      case 3:
        // show potentially dreamified text
        return <DreamTextPage 
          text = {this.strang}
          buttonAction = {this.props.nextStep} 
          dreaming = {this.props.dreaming}
        />;
      case 4:
        return <DreamingOrAwakePage
          buttonAction = {this.props.selectVerdict} 
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