import style from "./game.module.css";
import { useState } from "react";
let luckyNum = Math.floor(Math.random() * 10 + 1);

export default function Game() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleClick() {
    setCount(count + 1);
    if (number < luckyNum) {
      setError("You guessed a smaller number");
      setNumber("");
    } else if (number > luckyNum) {
      setError("You guessed a greater number");
      setNumber("");
      // setCount(count + 1);
    } else {
      setError("Hurray! You guessed it right..");
      setNumber("");
      // setCount(0);
      setShowResult(true);
    }
  }
  function resetAll() {
    setNumber("");
    setCount(0);
    setError("");
    setShowResult(false);
  }
  return (
    <div className={style.gameContainer}>
      <h1> Lucky Number Game</h1>
      <h3>Guess a number between 1 to 10..</h3>
      <div className={style.gameBox}>
        {showResult ? (
          <>
            <p className={style.errorNot}>{error}</p>
            <p>The number was {luckyNum}</p>
            <button className={style.again} onClick={resetAll}>
              {" "}
              Play Again
            </button>
          </>
        ) : (
          <>
            {" "}
            <input
              className={style.number}
              type="number"
              value={number}
              placeholder="Enter a number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className={style.submitBtn} onClick={handleClick}>
              Match Number
            </button>
            <p className={style.error}>{error}</p>
          </>
        )}
      </div>
      {showResult ? (
        <>
          <h2>Congratulations!!</h2>
          <h3>You won the game in {count} attempts.</h3>
        </>
      ) : null}
    </div>
  );
}
