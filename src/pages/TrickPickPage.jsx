import * as React from 'react';
import Button from '../components/Button';

function TrickPickPage({ stageSelectAction }) {
  const textLabel = "TEXT";
  const noseLabel = "NOSE";
  const techLabel = "TECH";

  return (
    <div className="main">
      <div className="big-top">PICK A TRICK</div>
      <Button label={textLabel} action={ stageSelectAction } param="text" />
      <Button label={noseLabel} action={ stageSelectAction } param="nose"/>
      <Button label={techLabel} action={ stageSelectAction } param="tech"/>
    </div>
  )
}

export default TrickPickPage;