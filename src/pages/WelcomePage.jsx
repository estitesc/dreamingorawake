import * as React from 'react';
import Button from '../components/Button';
import triangle from '../images/triangle.png';

function WelcomePage({ buttonAction }) {
  const startLabel = "START";

  return (
    <div className="main">
      <div className="small-top">
        <a href="http://dreamlabs.tech">
          <img src={triangle} height="30px"/>
        </a>
      </div>
      <div className="welcome-text">
        DREAMING<br />
        UNTIL<br />
        PROVEN<br />
        AWAKE<br />
      </div>
      <Button label={startLabel} action={ buttonAction }/>
    </div>
  )
}

export default WelcomePage;