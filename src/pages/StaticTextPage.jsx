import * as React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';

function StaticTextPage({ text, buttonLabel="OK", buttonAction }) {
  return (
    <div className="main">
      <Text text={text} />
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default StaticTextPage;