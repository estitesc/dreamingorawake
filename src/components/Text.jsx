import * as React from 'react';
import Parser from 'html-react-parser';

function Text({ text }) {
  return (
    <div className="center-text">
      {Parser(text)}
    </div>
  )
}

export default Text;