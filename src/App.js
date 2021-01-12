import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🇨🇦": "Canada",
  "🇳🇵": "Nepal",
  "🇺🇸": "United States",
  "🇮🇱": "Israel",
  "🇯🇵": "Japan",
  "🇱🇰": "Sri Lanka",
  "🇮🇳": "India",
  "🇿🇦": "South Africa"
};

var emojiWeKnow = Object.keys(emojiDictionary);
// emojiWeKnow is now a Array of all emojis

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>flag emojis</h1>

      <input style={{ height: "1.7rem" }} onChange={inputHandler} />

      <h2 style={{ color: "#1D4ED8", fontSize: "2rem" }}>{meaning}</h2>
      <h3>flags we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h5> click on flag icon or enter anyone out of these in the box </h5>
    </div>
  );
}
