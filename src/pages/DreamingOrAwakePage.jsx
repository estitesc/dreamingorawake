import * as React from 'react';
import Button from '../components/Button';

function DreamingOrAwakePage({ buttonAction }) {
  return (
    <div className="main">
      <div className="half-top">So which<br /> are you?</div>
      <Button label={"Dreaming"} action={buttonAction} param={"dreaming"}/>
      <Button label={"Awake"} action={buttonAction} param={"awake"}/>
    </div>
  )
}

export default DreamingOrAwakePage;