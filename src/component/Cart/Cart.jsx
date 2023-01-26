import { useState, useEffect } from "react";
import style from "./Cart.module.css";
export function Cart({ word }) {
  console.log(word);
  let [allEmodji, setAllEmodji] = useState([]);
  //let [final, setFinal] = useState([]);
  useEffect(() => {
    fetch("https://63d0063fe52f587829aa4fec.mockapi.io/emoji/item")
      .then((response) => response.json())
      .then((commits) => setAllEmodji(commits));
  }, []);

  return (
    <div className={style.wrap}>
      {allEmodji
        .filter((elem) =>
          elem.title.toLowerCase().includes(word.toLowerCase().trim())
        )
        .map((elem, index) => (
          <div key={index} className={style.cart}>
            <p>{elem.title}</p>
            <div>{elem.symbol}</div>
            <div>{elem.keywords}</div>
          </div>
        ))}
    </div>
  );
}
