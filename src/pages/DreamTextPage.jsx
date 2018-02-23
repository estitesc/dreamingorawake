import * as React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';

const maxSecondsPerChange = 3;
const weirdCharacters = "дЖфцЁЗЙщбЛгФфиУйЦЧШуЪкыЭюЮЯטזמאשדברגףקצהפל​‌יםו".split("");
const oddWords = "garbled salami chartruse if when loosit pig breakfast ham elfant tidbi cram hop whirl sky yolks drip drift split ld crumb candy cafe early".split(" ");
const otherShakes = "shake shake-slow shake-vertical shake-rotate shake-opacity".split(" ");

function DreamTextPage({ text, buttonLabel="OK", buttonAction, dreaming=false, initial=false }) {
  // Allow for each instance of DreamTextPage to have a different speed at which the text transforms in the dreaming case. This creates more variety in the animation outcome. 
  const secondsPerChange = Math.floor(Math.random() * maxSecondsPerChange) + 1

  // dreamTextPageInstanceId is used as a hack to prevent animations and CSS effects generated in this component from spilling over into over views or instances of this component, generate a random int to associate this instance with.
  const dreamTextPageInstanceId = Math.floor(Math.random() * 99999);
  
  let words = text.split(" ");
  let finalHTML = "";

  words.forEach((word, index) => {
    // Mix in the occasional "odd word" about an average of one per dreaming text string given that most of the strings are 8 words long or so.
    if(dreaming && Math.random() <= 0.15) {
      word = oddWords[Math.floor(Math.random() * oddWords.length)];
    }

    // Add a nobr around the word so that it doesn't split into multiple lines even though each letter will be its own span.
    finalHTML += "<nobr>";

    // Split word into letters and randomly give some of them an additional shake effect
    let letters = word.split("");
    letters.forEach((letter, index) => {
      let shake = "shake-little";
      if(!initial && Math.random() <= 0.1) {
        shake = otherShakes[Math.floor(Math.random() * otherShakes.length)];
      }
      finalHTML += "<span class='letter" + dreamTextPageInstanceId + " " + shake + " shake-constant'>" + letter + "</span>";
    });

    // Close the nobr tag and add a space after each word
    finalHTML += "</nobr>"
    finalHTML += "&nbsp;";
  });

  // This animation causes letters to occasionally swap out for weird characters, to simulate the dream experience
  function animate() {
    // Only animate in the dreaming case.
    if(!dreaming) { return }
    setTimeout(() => {
      requestAnimationFrame(animate);

      let letters = Array.from(document.querySelectorAll('.letter' + dreamTextPageInstanceId));
      if(letters.length < 1) { return }

      // Replace a randomly selected letter with a randomly selected weird character
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomWeirdCharacter = weirdCharacters[Math.floor(Math.random() * weirdCharacters.length)];
      randomLetter.innerHTML = randomWeirdCharacter;
      
      //Animate with a random shake type
      let shake = otherShakes[Math.floor(Math.random() * otherShakes.length)];
      randomLetter.className = 'shake-little shake-constant' + shake;
    }, 1000 * secondsPerChange);
  }

  animate();

  return (
    <div className="main">
      <Text text={finalHTML} />
      <Button label={buttonLabel} action={buttonAction}/>
    </div>
  )
}

export default DreamTextPage;