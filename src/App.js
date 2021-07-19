import "./App.css";
import React, { useState } from "react";
import MorseContext from "./components/context/MorseContext";
import Content from "./components/Content";

const App = () => {
  const letters = [
    ["A", ".-", 0],
    ["B", "-...", 1],
    ["C", "-.-.", 2],
    ["D", "-..", 3],
    ["E", ".", 4],
    ["F", "..-.", 5],
    ["G", "--.", 6],
    ["H", "....", 7],
    ["I", "..", 8],
    ["J", ".---", 9],
    ["K", "-.-", 10],
    ["L", ".-..", 11],
    ["M", "--", 12],
    ["N", "-.", 13],
    ["O", "---", 14],
    ["P", ".--.", 15],
    ["Q", "--.-", 16],
    ["R", ".-.", 17],
    ["S", "...", 18],
    ["T", "-", 19],
    ["U", "..-", 20],
    ["V", "...-", 21],
    ["W", ".--", 22],
    ["X", "-..-", 23],
    ["Y", "-.--", 24],
    ["Z", "--..", 25],
    ["1", ".----", 26],
    ["2", "..---", 27],
    ["3", "...--", 28],
    ["4", "....-", 29],
    ["5", ".....", 30],
    ["6", "-....", 31],
    ["7", "--...", 32],
    ["8", "---..", 33],
    ["9", "----.", 34],
    ["0", "-----", 35],
    ["Space", "/", 36],
  ];

  const [morseCode, setMorseCode] = useState("");
  const [textCode, setTextCode] = useState("");

  return (
    <div className="App">
      <MorseContext.Provider
        value={{ letters, morseCode, setMorseCode, textCode, setTextCode }}
      >
        <Content />
      </MorseContext.Provider>

      {/* <iframe width= "1" height= "1" 
      src= "https://www.youtube.com/embed/voB-K4AX9xA?rel=0;&autoplay=1&mute=1&loop=1&playlist=iG9CE55wbtY" 
      frameborder= "0" allowfullscreen include></iframe> */}
    </div>
  );
};

export default App;
