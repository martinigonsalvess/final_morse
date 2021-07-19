// import Axios from 'axios';
import React, { useEffect, useContext } from "react";
import MorseContext from "./context/MorseContext";
export default function Inputoutput() {
  <audio ref="audio_tag" src="../public/a.mp3" controls autoPlay />;

  // This is Context variables defined in App.js
  const {
    letters,
    morseCode,
    setMorseCode,
    textCode,
    setTextCode,
  } = useContext(MorseContext);

  // This will handle the alphanumeric box onChange
  const handleInputText = (e) => {
    setTextCode(e.target.value.replace(/[^a-zA-Z0-9\s]/, ""));
  };

  // When textCode is modified, then it is translated into morse
  useEffect(() => {
    // If the user cleans the textInput box, then morseCode is also cleared
    if (textCode.length === 0) {
      setMorseCode("");
    }

    // This will translate all textCode into morse
    // I bet it can be simplified
    let translation = "";
    for (let i = 0; i < textCode.length; i++) {
      // If user inserts a space, then 3 spaces are inserted
      // in morseCode, as a word division
      if (textCode[i] === " ") {
        translation += "   ";
      }

      for (let j = 0; j < letters.length; j++) {
        if (letters[j].includes(textCode[i])) {
          translation += letters[j][1] + " ";
        }
      }
      setMorseCode(translation);
    }
  }, [textCode, letters, setMorseCode]);

  // This crap is not working, i get the WAV but can not play it
  // const getMorseaudio = () => {
  //     Axios.get('http://api.funtranslations.com/translate/morse/audio?text=joeway')
  //     .then(element => { setMorseAudio(element.data.contents.translated.audio) })
  //     .then(console.log(morseAudio))
  //     }
  //     getMorseaudio()

  return (
    <>
      {/* Text input */}
      <input
        className="textInput"
        spellCheck="false"
        type="text"
        placeholder="Enter text..."
        value={textCode.toUpperCase()}
        onChange={handleInputText}
      />

      {/* Morse box */}
      <input
        className="morseInput"
        spellCheck="false"
        type="text"
        value={morseCode}
      />
    </>
  );
}
