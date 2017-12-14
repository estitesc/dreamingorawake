import * as React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';

const maxSecondsPerChange = 5;
const weirdCharacters = "дЖфцЁЗЙщбЛгФфиУйЦЧШуЪкыЭюЮЯטזמאשדברגףקצהפל​‌יםו".split("");
const oddWords = "garbled salami chartruse if when loosit pig breakfast ham elfant tidbi cram hop whirl sky yolks drip drift split dt ld dicky cafe early".split(" ");
const otherShakes = "shake shake-slow shake-vertical shake-rotate shake-opacity".split(" ");

function DreamTextPage({ text, buttonLabel="OK", buttonAction, dreaming=false, initial=false }) {
  const secondsPerChange = Math.floor(Math.random() * maxSecondsPerChange) + 1
  const DTPID = Math.floor(Math.random() * 99999);
  let words = text.split(" ");
  let finalHTML = "";

  words.forEach((word, index) => {
    if(dreaming && Math.random() <= 0.1) {
      word = oddWords[Math.floor(Math.random() * oddWords.length)];
    }

    let letters = word.split("");
    letters.forEach((letter, index) => {
      let shake = "shake-little";
      if(!initial && Math.random() <= 0.1) {
        shake = otherShakes[Math.floor(Math.random() * otherShakes.length)];
      }
      finalHTML += "<span class='letter" + DTPID + " " + shake + " shake-constant'>" + letter + "</span>";
    });

    finalHTML += "&nbsp;";
  });

  function animate() {
    if(!dreaming) { return }
    setTimeout(() => {
      requestAnimationFrame(animate);

      let letters = Array.from(document.querySelectorAll('.letter' + DTPID));
      if(letters.length < 1) { return }

      // Replace with a random strange letter
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomWeirdCharacter = weirdCharacters[Math.floor(Math.random() * weirdCharacters.length)];
      randomLetter.innerHTML = randomWeirdCharacter;
      
      //Animate with a random shake type
      let shake = otherShakes[Math.floor(Math.random() * otherShakes.length)];
      randomLetter.className = 'shake-little shake-constant' + shake;
    }, 1000 * secondsPerChange);
  }

  if(dreaming) {
    animate();
  }

  return (
    <div className="main">
      <Text text={finalHTML} />
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default DreamTextPage;