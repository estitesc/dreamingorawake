import * as React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';

function StaticTextPage({ text, buttonLabel="OK", buttonAction }) {
  const textLines = [];
  textLines[0] = text;

  // Needs to either have logic to break the text into
  // appropriate length lines or that really should just be
  // handled by CSS, but I think that may be what distinguishes this
  // from the "text" that we use on the welcome page
  // which maybe could just be hardcoded to welcome

  return (
    <div className="main">
      <Text text={textLines} />
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default StaticTextPage;