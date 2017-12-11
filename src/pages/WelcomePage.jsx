import * as React from 'react';
import Button from '../components/Button';

function WelcomePage({ buttonAction }) {
  const startLabel = "START";

  return (
    <div className="main">
      <div className="welcome-text">
        DREAMING <br />
        UNTIL <br />
        PROVEN <br />
        AWAKE <br />
      </div>
      <Button label={startLabel} action={ buttonAction }/>
    </div>
  )
}

export default WelcomePage;