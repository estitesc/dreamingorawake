import * as React from 'react';
import Button from '../components/Button';
import nosecheck from '../images/nosecheck.png';

function NoseImagePage({ buttonLabel="OK", buttonAction }) {
  return (
    <div className="main">
      <div className="image-page-top">try it now:</div>
      <div className="center-image">
        <img src = {nosecheck} height="300px"/>
      </div>
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default NoseImagePage;