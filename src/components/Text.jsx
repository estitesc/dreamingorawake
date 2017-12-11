import * as React from 'react';
import Parser from 'html-react-parser';

function Text({ text }) {
  // merge text lines into one block
  let formattedText = "";
  text.forEach((item, index) => {
    formattedText += item;
    formattedText += "<br>";
  });

  return (
    <div className="center-text">
      {Parser(formattedText)}
    </div>
  )
}

export default Text;