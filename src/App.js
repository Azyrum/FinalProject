import "./styles.css";
import { useState } from "react";
import { Cart } from "./component/Cart/Cart";
//import {word}
export default function App() {
  const [word, setWord] = useState("");
  return (
    <div className="App">
      <h1>EmodjiFinder</h1>
      <div class="input">
        <input
          type="text"
          onChange={(name) => setWord(name.target.value)}
        ></input>
      </div>
      <Cart word={word} />
    </div>
  );
}
