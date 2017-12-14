import * as React from 'react';
import Button from '../components/Button';

function LightSwitchPage({ buttonLabel="OK", buttonAction, dreaming }) {
  let lightOn = true;

  function lightClick() {
    let light = document.getElementById("lightswitch");
    if(lightOn) {
      if(dreaming) {
        light.className = "center-image shake-constant shake-little light-switch off";
      } else {
        document.body.style.backgroundColor = "Black";
        light.className = "center-image shake-constant shake-little light-switch off-grey";
      }
      lightOn = false;
    } else {
      document.body.style.backgroundColor = "White";
      light.className = "center-image shake-constant shake-little light-switch on";
      lightOn = true;
    }
  }

  return (
    <div className="main">
      <div className="image-page-top">try it now:</div>
      <div id="lightswitch" className="center-image shake-constant shake-little light-switch on" onClick={lightClick}/>
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default LightSwitchPage;